$(document).ready(function () {
    let image_blobs = $(".section-image");
    // image_blobs.forEach(img => {
    //     $.ajax({
    //         url : img.src,
    //         dataType: "text",
    //         success : function (data) {
    //             img.src = `data:image/png;base64,${data}`;
    //         }
    //     });
    // });
    for (let i = 0; i < image_blobs.length; i++) {
        console.log(image_blobs[i].src);
        $.ajax({
            url : image_blobs[i].src,
            dataType: "text",
            success : function (data) {
                img.src = `data:image/png;base64,${data}`;
            }
        });
    }
});