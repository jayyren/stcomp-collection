/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface KnButton {
      'clear': boolean;
      'color': string;
      'disabled': boolean;
      'full': boolean;
      'outline': boolean;
      'round': boolean;
      'size': string;
      'value': string;
    }
  }

  interface HTMLKnButtonElement extends StencilComponents.KnButton, HTMLStencilElement {}

  var HTMLKnButtonElement: {
    prototype: HTMLKnButtonElement;
    new (): HTMLKnButtonElement;
  };
  interface HTMLElementTagNameMap {
    'kn-button': HTMLKnButtonElement;
  }
  interface ElementTagNameMap {
    'kn-button': HTMLKnButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'kn-button': JSXElements.KnButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface KnButtonAttributes extends HTMLAttributes {
      'clear'?: boolean;
      'color'?: string;
      'disabled'?: boolean;
      'full'?: boolean;
      'outline'?: boolean;
      'round'?: boolean;
      'size'?: string;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface KnCode {
      'block': boolean;
    }
  }

  interface HTMLKnCodeElement extends StencilComponents.KnCode, HTMLStencilElement {}

  var HTMLKnCodeElement: {
    prototype: HTMLKnCodeElement;
    new (): HTMLKnCodeElement;
  };
  interface HTMLElementTagNameMap {
    'kn-code': HTMLKnCodeElement;
  }
  interface ElementTagNameMap {
    'kn-code': HTMLKnCodeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'kn-code': JSXElements.KnCodeAttributes;
    }
  }
  namespace JSXElements {
    export interface KnCodeAttributes extends HTMLAttributes {
      'block'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface KnOption {
      'value': string;
    }
  }

  interface HTMLKnOptionElement extends StencilComponents.KnOption, HTMLStencilElement {}

  var HTMLKnOptionElement: {
    prototype: HTMLKnOptionElement;
    new (): HTMLKnOptionElement;
  };
  interface HTMLElementTagNameMap {
    'kn-option': HTMLKnOptionElement;
  }
  interface ElementTagNameMap {
    'kn-option': HTMLKnOptionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'kn-option': JSXElements.KnOptionAttributes;
    }
  }
  namespace JSXElements {
    export interface KnOptionAttributes extends HTMLAttributes {
      'onSelect'?: (event: CustomEvent) => void;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface KnSelect {
      'options': JSX.Element[];
      'placeholder': string;
      'value': string;
    }
  }

  interface HTMLKnSelectElement extends StencilComponents.KnSelect, HTMLStencilElement {}

  var HTMLKnSelectElement: {
    prototype: HTMLKnSelectElement;
    new (): HTMLKnSelectElement;
  };
  interface HTMLElementTagNameMap {
    'kn-select': HTMLKnSelectElement;
  }
  interface ElementTagNameMap {
    'kn-select': HTMLKnSelectElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'kn-select': JSXElements.KnSelectAttributes;
    }
  }
  namespace JSXElements {
    export interface KnSelectAttributes extends HTMLAttributes {
      'onChange'?: (event: CustomEvent) => void;
      'onLoad'?: (event: CustomEvent) => void;
      'options'?: JSX.Element[];
      'placeholder'?: string;
      'value'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;