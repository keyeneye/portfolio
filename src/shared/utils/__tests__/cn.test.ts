import { cn } from "../cn";

describe("cn utility", () => {
  it("joins class names", () => {
    const result = cn("foo", "bar", "baz");
    expect(result).toBe("foo bar baz");
  });

  it("handles conditional classes", () => {
    const result = cn("base", true && "conditional", false && "not-included");
    expect(result).toBe("base conditional");
  });

  it("handles empty strings", () => {
    const result = cn("foo", "", "bar");
    expect(result).toBe("foo bar");
  });

  it("handles undefined and null", () => {
    const result = cn("foo", undefined, null, "bar");
    expect(result).toBe("foo bar");
  });

  it("handles clsx-style arrays", () => {
    const result = cn(["foo", "bar"]);
    expect(result).toBe("foo bar");
  });

  it("handles nested arrays", () => {
    const result = cn("foo", ["bar", ["baz"]]);
    expect(result).toBe("foo bar baz");
  });
});
