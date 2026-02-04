import { render } from "@testing-library/react";
import { Icon } from "../Icon";

describe("Icon component", () => {
  it("renders without crashing", () => {
    render(<Icon name="github" />);
    const icon = document.querySelector(".lucide-github");
    expect(icon).toBeInTheDocument();
  });

  it("renders correct icon by name", () => {
    render(<Icon name="github" />);
    const icon = document.querySelector(".lucide-github");
    expect(icon).toBeInTheDocument();
  });

  it("applies size classes correctly", () => {
    const { container: small } = render(<Icon name="github" size="sm" />);
    const { container: large } = render(<Icon name="github" size="lg" />);

    const smallIcon = small.querySelector("svg");
    const largeIcon = large.querySelector("svg");

    expect(smallIcon).toHaveAttribute("width", "16");
    expect(largeIcon).toHaveAttribute("width", "24");
  });

  it("applies custom className", () => {
    render(<Icon name="github" className="custom-class" />);
    const icon = document.querySelector(".lucide-github");
    expect(icon).toHaveClass("custom-class");
  });

  it("renders all icon types", () => {
    const iconNames = [
      { name: "github" as const, class: "github" },
      { name: "linkedin" as const, class: "linkedin" },
      { name: "twitter" as const, class: "twitter" },
      { name: "external" as const, class: "external-link" },
      { name: "code" as const, class: "code" },
      { name: "mail" as const, class: "mail" },
      { name: "chevronRight" as const, class: "chevron-right" },
    ];

    iconNames.forEach(({ name, class: className }) => {
      render(<Icon name={name} />);
      const icon = document.querySelector(`.lucide-${className}`);
      expect(icon).toBeInTheDocument();
    });
  });
});
