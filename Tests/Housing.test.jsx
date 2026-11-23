import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Housing from "../src/pages/Housing/Housing";
import Error from "../src/pages/Error/Error";

describe("Housing", () => {
  it("redirige vers la page d'erreur pour un identifiant invalide", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [],
      }),
    );

    render(
      <MemoryRouter initialEntries={["/housing/inconnu"]}>
        <Routes>
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText("404")).toBeInTheDocument();
    });
  });
});
