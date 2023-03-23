/* summary */

import React from 'react';

const Accordion = () => {
  return (
    <div className="max-w-md mx-auto">
      <details className="border-b border-gray-300 pb-2">
        <summary className="py-2 px-4 bg-gray-200 font-medium rounded-md cursor-pointer">
          Accordion Item 1
          <span className="float-right">+</span>
        </summary>
        <div className="pt-2 px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet, elit sit amet rhoncus interdum, nisi arcu pulvinar sapien, vel consequat quam purus vel velit.
        </div>
      </details>
      <details className="border-b border-gray-300 pb-2">
        <summary className="py-2 px-4 bg-gray-200 font-medium rounded-md cursor-pointer">
          Accordion Item 2
          <span className="float-right">+</span>
        </summary>
        <div className="pt-2 px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet, elit sit amet rhoncus interdum, nisi arcu pulvinar sapien, vel consequat quam purus vel velit.
        </div>
      </details>
      <details className="border-b border-gray-300 pb-2">
        <summary className="py-2 px-4 bg-gray-200 font-medium rounded-md cursor-pointer">
          Accordion Item 3
          <span className="float-right">+</span>
        </summary>
        <div className="pt-2 px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet, elit sit amet rhoncus interdum, nisi arcu pulvinar sapien, vel consequat quam purus vel velit.
        </div>
      </details>
    </div>
  );
};

export default Accordion;