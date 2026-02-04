import { formatDate, getDuration } from "../date";

describe("date utilities", () => {
  describe("formatDate", () => {
    it("formats a date object correctly", () => {
      const date = new Date(2023, 5, 15);
      const result = formatDate(date);
      expect(result).toBe("Jun 2023");
    });

    it("formats a string date correctly", () => {
      const result = formatDate("2023-12-25");
      expect(result).toBe("Dec 2023");
    });

    it("handles custom options", () => {
      const date = new Date(2023, 5, 15);
      const result = formatDate(date, { month: "long", year: "numeric" });
      expect(result).toBe("June 2023");
    });

    it("handles current date", () => {
      const result = formatDate(new Date());
      expect(result).toMatch(/[A-Z][a-z]{2} \d{4}/);
    });
  });

  describe("getDuration", () => {
    it("calculates duration in months", () => {
      const start = new Date(2023, 0, 1);
      const end = new Date(2023, 6, 1);
      const result = getDuration(start, end);
      expect(result).toBe("6 mo");
    });

    it("calculates duration in years", () => {
      const start = new Date(2021, 0, 1);
      const end = new Date(2023, 0, 1);
      const result = getDuration(start, end);
      expect(result).toBe("2y");
    });

    it("calculates duration with years and months", () => {
      const start = new Date(2021, 0, 1);
      const end = new Date(2023, 6, 1);
      const result = getDuration(start, end);
      expect(result).toBe("2y 6mo");
    });

    it("uses current date when endDate is not provided", () => {
      const start = new Date();
      start.setMonth(start.getMonth() - 3);
      const result = getDuration(start);
      expect(result).toBe("3 mo");
    });
  });
});
