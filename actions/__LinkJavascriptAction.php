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

class __LinkJavascriptAction extends YesWikiAction
{
    public function formatArguments($args)
    {
        return [];
    }

    public function run()
    {
        $this->getService(AssetsManager::class)->AddJavascriptFile('tools/replaceexportcsv/javascripts/autoupdate-csv-export-button.js');
    }
}
