[@react.component]
let make = () => {
  <div className="font-serif">
    <Header />
    <AboutMe.home />
    <h3 className="text-4xl pb-5 font-black">
      <a href="https://astro.miya-lis.net/">
        {R.s @@ {j|→→→旧サイトはこちら←←←|j}}
      </a>
    </h3>
    <h1 className="text-4xl">
      {R.s @@ {j|※※※ THIS WEB SITE IS UNDER CONSTRUCTION ※※※|j}}
    </h1>
    <h2 className="text-3xl">
      <Link path="/"> {R.s @@ {j|→→作り途中のやつ←←|j}} </Link>
    </h2>
  </div>;
};

[@react.component]
let dev = () => {
  <>
    <Layout.wrap>
      <Header />
      <Layout.wrapMain>
        <AboutMe.home />
        <Table>

            {[("/aboutme", "About me"), ("/prev", "Prev Site")]
             |> List.map(((path, name)) => <Table.element path name />)
             |> Array.of_list
             |> React.array}
          </Table>
          // <Table.element path="/aboutme" name="About me" />
          // <Table.element path="/prev" name={j|旧サイト|j} />
      </Layout.wrapMain>
    </Layout.wrap>
    <footer className="text-center fixed bottom-0">
      <h1 className="text-2xl">
        {R.s @@ {j|※※ THIS WEB SITE IS UNDER CONSTRUCTION ※※|j}}
      </h1>
    </footer>
    // <Table/>
  </>;
};
