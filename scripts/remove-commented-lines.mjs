#!/usr/bin/env node
/**
 * Remove comment-only lines from code files.
 * - Removes lines that are purely comments (e.g. double-slash or block comments) and their interior lines
 * - Preserves lines that contain code plus trailing comments
 * - Handles HTML comment blocks <!-- ... --> for .html files
 *
 * Processed extensions: .ts, .tsx, .js, .jsx, .css, .html
 * Skips: node_modules, .git, dist, build
 */
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync, mkdirSync } from "node:fs";
import { join, extname } from "node:path";

const root = process.cwd();
const includeExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".css", ".html"]);
const skipDirs = new Set(["node_modules", ".git", "dist", "build"]);

function isDir(path) {
  try {
    return statSync(path).isDirectory();
  } catch {
    return false;
  }
}

function walk(dir, files = []) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return files;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      walk(full, files);
    } else {
      if (includeExtensions.has(extname(entry.name))) {
        files.push(full);
      }
    }
  }
  return files;
}

function removeCommentOnlyLines(content, ext) {
  const isHtml = ext === ".html";
  let insideBlock = false; // for /* ... */ or <!-- ... -->

  const lines = content.split(/\r?\n/);
  const out = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Handle block comments continuation
    if (insideBlock) {
      const endToken = isHtml ? "-->" : "*/";
      if (trimmed.includes(endToken)) {
        // End of block comment
        insideBlock = false;
      }
      // Entire line is part of a comment block; skip
      continue;
    }

    if (isHtml) {
      // HTML single-line comment-only
      if (trimmed.startsWith("<!--")) {
        // If it closes on same line and there's nothing but comment, skip
        const endIdx = trimmed.indexOf("-->");
        if (endIdx !== -1) {
          const before = trimmed.slice(0, endIdx + 3);
          const after = trimmed.slice(endIdx + 3).trim();
          if (before.startsWith("<!--") && after.length === 0) {
            continue; // pure comment line
          }
          // Mixed code and comment: keep as-is
        } else {
          // Starts a block comment and line is only comment
          if (trimmed === "<!--" || trimmed.startsWith("<!--")) {
            insideBlock = true;
            continue;
          }
        }
      }
      // Keep non-comment-only lines
      out.push(line);
      continue;
    }

    // For C-style languages: .ts, .tsx, .js, .jsx, .css
    // Pure // comment line
    if (trimmed.startsWith("//")) {
      continue;
    }

    // Detect block comment starts anywhere on the line
    const startIdx = line.indexOf("/*");
    if (startIdx !== -1) {
      const endIdx = line.indexOf("*/", startIdx + 2);
      const before = line.slice(0, startIdx).trim();
      const after = endIdx !== -1 ? line.slice(endIdx + 2).trim() : "";

      // If the comment starts at beginning (ignoring whitespace) and the rest of the line is comment-only, skip
      if (before.length === 0 && (endIdx === -1 || after.length === 0)) {
        if (endIdx === -1) {
          insideBlock = true;
        }
        continue; // pure comment line
      }

      // Comment starts mid-line (after some code)
      if (endIdx === -1) {
        // Subsequent lines are comment-only until we find */
        insideBlock = true;
      }
      // Keep the current line (contains code)
      out.push(line);
      continue;
    }

    // Regular non-comment line
    out.push(line);
  }

  // Remove trailing extra blank lines created by removals
  while (out.length > 0 && out[out.length - 1].trim() === "") {
    out.pop();
  }

  return out.join("\n");
}

const files = walk(root);
let changed = 0;
for (const file of files) {
  try {
    const original = readFileSync(file, "utf8");
    const cleaned = removeCommentOnlyLines(original, extname(file));
    if (cleaned !== original) {
      writeFileSync(file, cleaned, "utf8");
      changed++;
    }
  } catch {
    // ignore file errors
  }
}

console.log(`Removed comment-only lines in ${changed} file(s).`);


