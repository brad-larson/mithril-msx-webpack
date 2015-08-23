module.exports = [
  {
    url: "#/example/01_hello",
    title: "Hello world",
    raw: require("!!raw!bundles/example/01_hello.jsx"),
    component: require("bundles/example/01_hello.jsx")
  },

  {
    url: "#/example/02_define_a_component",
    title: "Define a component",
    raw: require("!!raw!bundles/example/02_define_a_component.jsx"),
    component: require("bundles/example/02_define_a_component.jsx")
  },


  {
    url: "#/example/03_component_children",
    title: "Component children",
    raw: require("!!raw!bundles/example/03_component_children.jsx"),
    component: require("bundles/example/03_component_children.jsx")
  },


  {
    url: "#/example/04_state",
    title: "State",
    raw: require("!!raw!bundles/example/04_state.jsx"),
    component: require("bundles/example/04_state.jsx")
  },


  {
    url: "#/example/05_form",
    title: "Form",
    raw: require("!!raw!bundles/example/05_form.jsx"),
    component: require("bundles/example/05_form.jsx")
  },


  {
    url: "#/example/06_ajax",
    title: "Ajax",
    raw: require("!!raw!bundles/example/06_ajax.jsx"),
    component: require("bundles/example/06_ajax.jsx")
  },


  {
    url: "#/example/07_compiling_jsx",
    title: "Compiling JSX",
    raw: require("!!raw!bundles/example/07_compiling_jsx.jsx"),
    compiled: require("raw!bundles/example/07_compiling_jsx.jsx")
  },


  {
    url: "#/example/08_computation",
    title: "m.startComputation / m.endComputation",
    raw: require("!!raw!bundles/example/08_computation.jsx"),
    component: require("bundles/example/08_computation.jsx")
  },


  {
    url: "#/example/99_color_table",
    title: "Color table",
    raw: require("!!raw!bundles/example/99_color_table.jsx"),
    component: require("bundles/example/99_color_table.jsx")
  },

]
