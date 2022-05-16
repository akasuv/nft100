import NFTCard from "./index";
import { render } from "@testing-library/react";

test("should render an NFT card with title and image", () => {
  const { getByRole, getByText, container } = render(
    <NFTCard name="test-nft-card" imageURL="a.png" />
  );

  const p = getByText("test-nft-card");
  const img = getByRole("img");

  expect(p.textContent).toBe("test-nft-cards");
  expect(img.getAttribute("src")).toBe("a.png");

  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      box-sizing: border-box;
      height: 339px;
      width: 226px;
      border: 3px solid #fff;
      background-color: #000;
      color: #fff;
      padding-left: 12.8px;
      padding-right: 12.8px;
      padding-top: 19.2px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .emotion-1 {
      text-align: center;
    }

    .emotion-2 {
      margin: 0;
      font-family: "Roboto","Helvetica","Arial",sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5;
      letter-spacing: 0.00938em;
      font-size: 20px;
    }

    <div
      class="MuiBox-root emotion-0"
    >
      <div
        class="MuiBox-root emotion-1"
      >
        <p
          class="MuiTypography-root MuiTypography-body1 emotion-2"
        >
          test-nft-card
        </p>
      </div>
      <img
        alt="test-nft-card"
        height="200"
        src="a.png"
        width="200"
      />
    </div>
  `);
});
