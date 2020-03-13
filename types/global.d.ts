/** Global definitions for developement **/

// for style loader
declare module '*.css' {
    const styles: any;
    export = styles;
}

//not working @types/mobx-devtools-mst
declare module 'mobx-devtools-mst';
