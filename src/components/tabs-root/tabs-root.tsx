import { Component, h } from "@stencil/core";

@Component({
  tag: "tabs-root",
  styleUrl: "tabs-root.scss"
})
export class TabsRoot {
  render() {
    return (
      <div>
        <p>Hello TabsRoot!</p>
      </div>
    );
  }
}
