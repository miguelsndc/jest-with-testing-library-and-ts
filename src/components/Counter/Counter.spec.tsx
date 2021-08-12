import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import Counter from "./Counter";

describe("Counter Component", () => {
  describe('initialized with default count = 10 and description = "Counter Desc"', () => {
    beforeEach(() => {
      render(<Counter defaultCounter={10} description="Counter Desc" />);
    });

    it("renders Current Count: 10", () => {
      expect(screen.getByText("Current Count: 10")).toBeInTheDocument();
    });

    it('renders title as "Counter Desc"', () => {
      expect(screen.getByText(/Counter Desc/)).toBeInTheDocument();
    });

    describe('when incrementor is 5 and "+" button is clicked', () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}5", {});
        user.click(screen.getByRole("button", { name: "increment" }));
      });

      it("renders Current Count: 15", () => {
        expect(screen.getByText("Current Count: 15")).toBeInTheDocument();
      });
    });

    describe('when incrementor is 5 and "-" button is clicked', () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}5", {});
        user.click(screen.getByRole("button", { name: "decrement" }));
      });

      it("renders Current Count: 5", () => {
        expect(screen.getByText("Current Count: 5")).toBeInTheDocument();
      });
    });

    describe("when incrementor is not specified", () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}{del}", {});
      });

      describe('and "+" button is cliked', () => {
        beforeEach(() => {
          user.click(screen.getByRole("button", { name: "increment" }));
        });

        it("renders Current Count: 10", () => {
          expect(screen.getByText("Current Count: 10")).toBeInTheDocument();
        });
      });

      describe('and "-" button is cliked', () => {
        beforeEach(() => {
          user.click(screen.getByRole("button", { name: "decrement" }));
        });

        it("renders Current Count: 10", () => {
          expect(screen.getByText("Current Count: 10")).toBeInTheDocument();
        });
      });
    });
  });

  describe('initialized with default count = 0 and description = "WWW"', () => {
    beforeEach(() => {
      render(<Counter defaultCounter={0} description="WWW" />);
    });

    it("renders Current Count: 0", () => {
      expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
    });

    it('renders title as "WWW"', () => {
      expect(screen.getByText(/WWW/)).toBeInTheDocument();
    });

    describe("when add button is clicked", () => {
      beforeEach(() => {
        user.click(screen.getByRole("button", { name: "increment" }));
      });

      it("renders Current Count: 1", () => {
        expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
      });
    });

    describe("when minus button is clicked", () => {
      beforeEach(() => {
        user.click(screen.getByRole("button", { name: "decrement" }));
      });

      it("renders Current Count: -1", () => {
        expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
      });
    });
  });
});
