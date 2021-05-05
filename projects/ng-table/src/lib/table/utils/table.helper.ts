export class TableHelper {
  private rowData;
  private rowElement;
  private template;
  private settings;
  constructor(rowData, rowElement, template, settings) {
    Object.assign(this, ...rowData, ...rowElement, ...template, ...settings);
  }

  handleExpandRowData() {
    const rowEmbeddedView = this.template.templateRef.createEmbeddedView({
      ...this.rowData,
    });
    const templateEl = rowEmbeddedView.rootNodes[0] as HTMLElement;
    if (templateEl.tagName !== "TR") {
      console.error("Please use <tr> as root element for RowExpandTemplate");
    } else {
      templateEl.setAttribute(`row-expanded`, "");
      this.handleCollapseRow(templateEl);
    }
  }
  handleCollapseRow(templateEl) {
    const {
      triggerCloseExpanded,
      triggerCloseExpandedFunc,
    } = this.settings.rows;
    if (
      this.rowElement.nextElementSibling.attributes.getNamedItem("row-expanded")
    ) {
      if (triggerCloseExpanded || triggerCloseExpandedFunc) {
        this.rowElement.nextElementSibling.remove();
      }
    } else {
      this.rowElement.insertAdjacentElement("afterend", templateEl);
    }
  }
}
