$(document).ready(function () {
    var p = JSON.parse(posts);

    for (let i = p.length-1; i >= 0; i--) {
        let main_div = document.createElement("div");
        main_div.className = "sections";
        main_div.id = `section-${i}`;


        let _header = document.createElement("h2");
        _header.className = "section-header";
        _header.innerHTML = p[i].header;


        let date_display = document.createElement("p");
        date_display.style = "font-size: small;color: antiquewhite;margin-top: 0px;user-select: none; align-self: flex-end;";
        date_display.innerHTML = p[i].date;


        let _img = document.createElement("img");
        _img.className = "section-image";
        _img.src = `data:image/png;base64,${p[i].image}`;


        let _body = document.createElement("p");
        _body.className = "section-text";
        _body.innerHTML = `<strong>${p[i].body}</strong>`;


        main_div.appendChild(_header);
        main_div.appendChild(date_display);
        main_div.appendChild(_img);
        main_div.appendChild(_body);

        document.getElementById("section-container").appendChild(main_div);
    }    
});