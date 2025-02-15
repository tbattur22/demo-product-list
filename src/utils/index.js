// import React from 'react'

// export class ErrorBoundary extends React.Component {
//   consructor(props) {
//     super(props);
//     this.state = {hasError: false};
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componendtDidCatch(error, info) {
//     // logErrorToMyService(error, info.componentStack);
//     console.log(`ErrorBoundary:componentDidCatch():error,info`,error,info);
//   }

//   render() {
//     if (this.state.hasError) {
//       return this.props.fallback;
//     }

//     return this.props.children;
//   }
// }

export const LayoutEnum = Object.freeze({
  LIST: "List",
  TABLE: "Table"
});

export const Layouts = [LayoutEnum.LIST, LayoutEnum.TABLE];
export function isLayoutList(layout) {
    return layout && layout === LayoutEnum.LIST;
}

export function isLayoutTable(layout) {
    return layout && layout === LayoutEnum.TABLE;
}

