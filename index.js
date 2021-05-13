import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

function MyHeader(){
  return (
      <header class="banner">
		    <h1>News</h1>
		    <p>Local and National News</p>
		  </header>
  )
}

function MyNav(){
  return (
      <nav>
		    <ul>
			    <li><a href="index.html">Home</a></li>
			    <li><a href="archive.html">Archives</a></li>
			    <li><a href="about.html">About</a></li>
		    </ul>
		</nav>
  )
}

function MyMain(){
  return (
    <main>
		  <section>
			<h2>Local News</h2>
			<article>
			  <header>
				<h3>Fire fighters rescue man from building</h3>
				<p>(author, date)</p>
			  </header>
			  <p>This is the story text. This is the story text.</p>
			  <p>This is the story text. This is the story text.</p>
			</article>
			<article>
			  <header>
				<h3>New Library to be built</h3>
				<p>(author, date)</p>
			  </header>
			  <p>This is the story text. This is the story text.</p>
			  <p>This is the story text. This is the story text.</p>
			</article>
		  </section>
		</main>
  )
}

function MyAside(){
  return (
    <aside>
		  <h2>Be a news reporter</h2>
		  <p>If you see news happening - Send us a Text.</p>
		</aside>
  )
}

function MyFooter(){
  return (
    <footer>
		  <p>Footer Information</p>
		</footer>
  )
}

ReactDOM.render(
  <div>
    <MyHeader />
    <MyNav />
    <MyMain />
    <MyAside />
    <MyFooter />
  </div>
, document.getElementById("root"));
