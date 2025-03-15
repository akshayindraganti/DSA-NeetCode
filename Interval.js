class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

class IntervalMerger {
  constructor(intervals) {
    this.intervals = intervals;
  }

  // Merge overlapping intervals
  merge() {
    if (!this.intervals.length) return [];

    // Sort intervals based on the start value.
    this.intervals.sort((a, b) => a.start - b.start);

    const merged = [];
    let currentInterval = this.intervals[0];

    for (let i = 1; i < this.intervals.length; i++) {
      const interval = this.intervals[i];

      // If the current interval overlaps with the next one, merge them.
      if (currentInterval.end >= interval.start) {
        currentInterval.end = Math.max(currentInterval.end, interval.end);
      } else {
        merged.push(currentInterval);
        currentInterval = interval;
      }
    }

    merged.push(currentInterval);
    return merged;
  }
}

// Example usage:
const intervalsClass = [
  new Interval(1, 3),
  new Interval(2, 6),
  new Interval(8, 10),
  new Interval(15, 18),
];

const merger = new IntervalMerger(intervalsClass);
const mergedIntervals = merger.merge();
console.log("Class-Based Merged Intervals:");
mergedIntervals.forEach((interval) =>
  console.log(`[${interval.start}, ${interval.end}]`)
);

function createIntervalMerger(intervals) {
  // Merge overlapping intervals and return the result.
  function merge() {
    if (!intervals.length) return [];

    // Sort intervals based on the start value.
    intervals.sort((a, b) => a.start - b.start);

    const merged = [];
    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
      const interval = intervals[i];
      // Check for overlap
      if (current.end >= interval.start) {
        current.end = Math.max(current.end, interval.end);
      } else {
        merged.push(current);
        current = interval;
      }
    }

    merged.push(current);
    return merged;
  }

  return { merge };
}

// Example usage:
const intervalsFunction = [
  { start: 1, end: 3 },
  { start: 2, end: 6 },
  { start: 8, end: 10 },
  { start: 15, end: 18 },
];

const mergerFunction = createIntervalMerger(intervalsFunction);
const mergedIntervalsFunc = mergerFunction.merge();
console.log("\nFunction-Based Merged Intervals:");
mergedIntervalsFunc.forEach((interval) =>
  console.log(`[${interval.start}, ${interval.end}]`)
);
