// CSS module declarations
declare module '*.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}