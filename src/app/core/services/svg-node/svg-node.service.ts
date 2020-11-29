import { Injectable } from '@angular/core';

import { NodeAttributes } from '../../models';

@Injectable()
export class SvgNodeService {
  getNode(
    node: d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
    childTag: string,
    attributes: NodeAttributes
  ): d3.Selection<d3.BaseType, unknown, HTMLElement, any> {
    const child = node.append(childTag);
    Object.entries(attributes).map((item) => {
      const key = item[0];
      const value = item[1];
      child.attr(key, value);
    });
    return child;
  }
}
