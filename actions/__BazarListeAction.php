<?php

/*
 * This file is part of the YesWiki Extension replaceexportcsv.
 *
 * Authors : see README.md file that was distributed with this source code.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace YesWiki\Replaceexportcsv;

use YesWiki\Core\Service\AssetsManager;
use YesWiki\Core\YesWikiAction;

class __BazarListeAction extends YesWikiAction
{
    public function formatArguments($args)
    {
        if (isset($_GET['vue']) && $_GET['vue'] === "exportercustom") {
            return [
                'template' => 'tableau.tpl.html',
                'dynamic' => false,
                'showexportbuttons' => false,
            ];
        }
        return [
        ];
    }

    public function run()
    {
        if (isset($_GET['vue']) && $_GET['vue'] === "exportercustom") {
            $this->getService(AssetsManager::class)->AddJavascriptFile('tools/replaceexportcsv/javascripts/activate-tableau-export-button-after-loading.js');
        }
    }
}
