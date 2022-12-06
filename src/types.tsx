export type LayoutProps = {
  children: ComponentChild | ComponentChild[],
}

export type ComponentChild = JSX.Element | string;
export type ComponentChildren = ComponentChild[] | ComponentChild;