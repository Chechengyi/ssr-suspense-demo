import React, { use, Suspense } from 'react'

async function getData() {
  const response = await fetch('http://localhost:5555/getData');
  const data = await response.json();
  return data;
}

function Child() {
  const data = use(getData())
  console.log('112222222')

  function onClick(str) {
    console.log('title is', str)
  }

  return (
    <div>
      {
        data.map((item) => (
          <p key={item.id} onClick={() => onClick(item.title)}>{item.title}</p>
        ))
      }
    </div>
  )
}


export default function App() {
  return (
    <div id="root">
      <Suspense fallback={<p>loading</p>}>
        <Child />  
      </Suspense>
    </div>
  )
}