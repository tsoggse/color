.POSIX:
SHELL := /bin/bash
DENO := $(shell which deno)
# Format the code
fmt:
	@echo -e "\033[32mFormatting the code...\033[0m"
	$(DENO) fmt
	@echo -e "\033[32mFormatting finished.\033[0m"
# Lint the code
lint:
	@echo -e "\033[32mLinting the code...\033[0m"
	$(DENO) lint
	@echo -e "\033[32mLinting finished.\033[0m"
