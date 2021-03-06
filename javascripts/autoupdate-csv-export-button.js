/*
 * This file is part of the YesWiki Extension replaceexportcsv.
 *
 * Authors : see README.md file that was distributed with this source code.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

$(document).ready(function(){

    function updateLink(target) {
      const $button = $(target)
      const url = new URL($button.attr('href'))
      const params = url.searchParams
      const pageParams = new URLSearchParams(window.location.search)
      let parsedHash = new URLSearchParams(
        window.location.hash.substring(1) // skip the first char (#)
      );
  
      
      // rename 'facette' as 'query'
      if (pageParams.has('facette')) {
        for (const queryData of (new URLSearchParams(pageParams.get('facette').split('|').join('&'))).entries()){
          if (!parsedHash.has(queryData[0])){
            parsedHash.set(queryData[0],queryData[1]);
          }
        }
      }
  
      if (params.has('facette')){
        params.delete('facette');
      }
  
      // get query from url
      if (pageParams.has('query')){
        for (const queryData of (new URLSearchParams(pageParams.get('query'))).entries()){
          if (!parsedHash.has(queryData[0])){
            parsedHash.set(queryData[0],queryData[1]);
          }
        }
      }
      
      // compatibility with bazarliste dynamic
      if (parsedHash.has('null')){
        parsedHash.delete('null');
      }
      if (parsedHash.has('q')){
        let search = parsedHash.get('q');
        parsedHash.delete('q');
        params.set('q',search);
      }
      let keys = [];
      for (const key of parsedHash.keys()){
        keys.push(key);
      }
      if (keys.length > 0){
        params.set('query',decodeURIComponent(parsedHash.toString()).split('&').join('|'));
      } else if (params.has('query')){
        params.delete('query');
      }
      
      let newUrl = decodeURIComponent(url).replace(/((?:\?|&)[A-Za-z0-9-_ ]+)(\/iframe)?=($|&|\?)/,'$1$2$3')
      if ( wiki.isDebugEnabled) {
        console.debug('Updating url %s', newUrl)
      }
      $button.attr('href',newUrl);
    }
    $(document).on('mousedown', 'a[href*="vue=exportercustom"]', function(event) {
      updateLink($(this));
    });
    $(document).on('click', 'a[href*="vue=exportercustom"]', function(event) {
      updateLink($(this));
      event.preventDefault()
  
      const $button = $(this)
      const url = new URL($button.attr('href'))
  
      if (wiki.isDebugEnabled) {
        console.debug('Redirecting to %s', url)
      }
  
      window.location = url
    })
  });
