
let openedSite=[];

function createNew() {
   
    let url=document.getElementById("idtake").value;
    url="http://www."+url;
    
    
    document.getElementById("framebrowser").src=url;
    openedSite.push(url);
    allSite();


}

function allSite() {
    let totalText="";
    
    for (let urlItem of openedSite) {

        totalText += `<a href="${urlItem}" target="framebrowser">${urlItem}</a><br>`;
    

        

    }

    document.getElementById("ta").innerHTML=totalText;
}