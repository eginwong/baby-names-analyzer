# Baby Names Analyzer

## Description
The baby names analyzer is used to demonstrate the abilities of performance tuning and benchmarking in node.js.

## Features
- provides count of names beginning with a certain prefix

## Tools Used
- eslint

## Instructions

The goal is to run three different experiments on how to tune the performance of this simple application.
0. Establish baseline of initial implementation.
1. Add a cache for the data lookup. Baseline.
2. Try re-writing the processing logic for the filter using `map` and `reduce`. Baseline.
3. See if adding a data structure would improve performance further. Baseline.

Sample baselines can be found under `/performance-metrics`.

### Setup
1. `npm i`
2. Ensure that `autocannon` is installed (`npm i -g autocannon`). This tool is used for load testing.
3. Ensure that `0x` is installed (`npm i -g 0x`). This tool captures flamegraphs for performance tuning.

### Establishing a baseline
1. Set `NODE_ENV=production npm start` to begin the application in production mode. There are some times production optimizations in node. The application is now started.
2. Run the autocannon tool to establish a baseline for performance: `autocannon -c 100 http://localhost:3000/filter?prefix=a`

### Creating a flamegraph
1. Run the application using `0x`: `NODE_ENV=production 0x index.js`
2. Run the autocannon tool: `autocannon -c 100 http://localhost:3000/filter?prefix=a`
3. Send a SIGEXIT when the autocannon process is complete: `Ctrl+C`

## Miscellaneous
### Data
From [Government Catalog](https://catalog.data.gov/dataset/most-popular-baby-names-by-sex-and-mothers-ethnic-group-new-york-city-8c742)
- columns in data set:
  - Year of Birth
  - Gender
  - Ethnicity
  - Child's First Name
  - Count
  - Rank
