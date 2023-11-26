mport './PdfCompressor.css';

function PdfCompressor(){
    let url = "Your-Link-Here";

    return(
        <div id="body">
        <h1 id="welcome">Welcome</h1><br/>
        <form id="form" action={url} method="post" encType="multipart/form-data">
            <input type="file" name="File" accept=".pdf"/><br/>
            <input type="submit" value="Convert File"/>
        </form>
        </div>
    )
}

export default PdfCompressor;
