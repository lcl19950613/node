/**
 * Created by qiuyanlong on 2016/12/28 0028.
 *
 *  实现删除的功能
 */

$(function () {
    $('.del').click(function (e) {
        var target = $(e.target);
        var id = target.attr('tid');
        var tr = $(".item-id-"+id);

        $.ajax({
            type:'DELETE',
            url:'/admin/list?id='+id
        }).done(function (results) {
                if (results.success === 1){
                    if (tr.length > 0){
                        tr.remove();
                        alert('删除成功！')
                    }
                }
        }).fail(function(e){
            alert('删除请求失败，请检查你的请求')
        })
    })
})