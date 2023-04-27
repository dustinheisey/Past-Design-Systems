import { html } from "lit";

export default {
  title: "Elements/Text/Math",
};

export const Default = () => html`
  <p>
    The quadratic formula is:
    <math>
      <mrow>
        <mi>x</mi>
        <mo>=</mo>
        <mfrac>
          <mrow>
            <mo>-</mo>
            <mi>b</mi>
            <mo>&plusmn;</mo>
            <msqrt>
              <mrow>
                <msup><mi>b</mi><mn>2</mn></msup>
                <mo>-</mo>
                <mrow>
                  <mn>4</mn>
                  <mo>&times;</mo>
                  <mi>a</mi>
                  <mo>&times;</mo>
                  <mi>c</mi>
                </mrow>
              </mrow>
            </msqrt>
          </mrow>
          <mrow>
            <mn>2</mn>
            <mo>&times;</mo>
            <mi>a</mi>
          </mrow>
        </mfrac>
      </mrow>
    </math>
  </p>
`;
