/**
 * Rule for http://www.books.com.tw/products/*
 */

module.exports = {
    summary: {
        title: 'div.container_24.main_wrap.clearfix > div > div.mod.type02_p01_wrap.clearfix > div.grid_10 > div.mod.type02_p002.clearfix > h1',
        description: 'div.content',
        images: {
            'PARENT': '#thumbnail img',
            'LIST': {
                '348px': function ($img) {
                    return $img.attr('src');
                },
                '600px': function ($img) {
                    return $img.attr('src').replace('&w=348&h=348', '&w=600&h=600');
                }
            }
        }
    }
}