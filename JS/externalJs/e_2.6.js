//setTimeout(()=>document.write("Hello"),5000)

function hello(callback)
{
    document.write("Hello")
    callback()
}

hello(()=>document.write("Bye"))

// =====================================================

function fetchData(callback)
{
    let data="Data from the server";
    callback(data)

}

fetchData((s)=>document.write(s))




