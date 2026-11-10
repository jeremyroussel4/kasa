import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Gallery from "./Gallery";

describe("Gallery", () => {
  it("affiche la première image au chargement", () => {
    const pictures = ["/photo-1.jpg", "/photo-2.jpg"];

    render(<Gallery pictures={pictures} title="Un logement" />);

    const image = screen.getByRole("img", { name: "Un logement" });

    expect(image).toHaveAttribute("src", "/photo-1.jpg");
    expect(screen.getByText("1/2")).toBeInTheDocument();
  });

  it("affiche la photo suivante après un clic", () => {
    const pictures = ["/photo-1.jpg", "/photo-2.jpg", "/photo-3.jpg"];

    render(<Gallery pictures={pictures} title="Un logement" />);

    fireEvent.click(screen.getByRole("button", { name: "Photo suivante" }));

    expect(screen.getByRole("img", { name: "Un logement" })).toHaveAttribute(
      "src",
      "/photo-2.jpg",
    );
    expect(screen.getByText("2/3")).toBeInTheDocument();
  });

  it("revient à la dernière photo après un clic précédent depuis la première", () => {
    const pictures = ["/photo-1.jpg", "/photo-2.jpg", "/photo-3.jpg"];

    render(<Gallery pictures={pictures} title="Un logement" />);

    fireEvent.click(screen.getByRole("button", { name: "Photo précédente" }));

    expect(screen.getByRole("img", { name: "Un logement" })).toHaveAttribute(
      "src",
      "/photo-3.jpg",
    );
    expect(screen.getByText("3/3")).toBeInTheDocument();
  });

  it("masque les boutons lorsqu'il n'y a qu'une photo", () => {
    render(<Gallery pictures={["/photo-1.jpg"]} title="Un logement" />);

    expect(
      screen.queryByRole("button", { name: "Photo précédente" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Photo suivante" }),
    ).not.toBeInTheDocument();
    expect(screen.getByText("1/1")).toBeInTheDocument();
  });
});