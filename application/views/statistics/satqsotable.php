<?php
if ($qsoarray) {
    echo '<br />
        <table style="width:100%" class="satuniquetable table-sm table table-bordered table-hover table-striped table-condensed text-center">
            <thead>';
                    echo '<tr><th></th>';
                    foreach($modes as $mode) {
                        echo '<th>' . $mode . '</th>';
                    }
                    echo '<th>'.lang('statistics_total').'</th>';
                    echo '</tr>
            </thead>
            <tbody>';
	foreach ($qsoarray as $sat => $mode) {
        	echo '<tr><th>'. $sat .'</th>';
		foreach ($mode as $singlemode) {
			echo '<td>'.$singlemode.'</td>';
		}
        	echo '<th>' . $sattotal[$sat] . '</th>';
		echo '</tr>';
	}
    echo '</tbody><tfoot><tr><th>'.lang('statistics_total').'</th>';
	$grandtotal=0;
    foreach($modes as $mode) {
        echo '<th>' . $modetotal[$mode] . '</th>';
        $grandtotal += $modetotal[$mode];
    }
echo '<th>' . $grandtotal . '</th>';
    echo '</tr></tfoot></table>';
}
