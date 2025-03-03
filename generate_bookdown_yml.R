# List all .Rmd files in the project (excluding index.Rmd)
rmd_files <- list.files(pattern = "\\.Rmd$", recursive = TRUE)
rmd_files <- rmd_files[rmd_files != "my-book.Rmd"]  # Exclude index.Rmd

# Create the content for _bookdown.yml
yml_content <- c(
  "book_filename: 'my-book'",
  "delete_merged_file: true",
  "language:",
  "  label:",
  "    fig: 'Рисунок '",
  "    tab: 'Таблица '",
  "  ui:",
  "    chapter_name: 'Глава '",
  paste0("rmd_files: [", paste0("'", rmd_files, "'", collapse = ", "), "]"),
  "output_dir: 'docs'",
  "new_session: no"
)

# Write the content to _bookdown.yml
writeLines(yml_content, "_bookdown.yml")

# Print a message
message("_bookdown.yml has been updated with the following Rmd files:")
print(rmd_files)

cleanup_md_files <- function(output_dir) {
  md_files <- list.files(output_dir, pattern = "\\.md$", full.names = TRUE)
  if (length(md_files) > 0) {
    file.remove(md_files)
    message("Removed .md files from ", output_dir)
  } else {
    message("No .md files found in ", output_dir)
  }
}

# Run the cleanup function
cleanup_md_files(output_dir = '/docs')