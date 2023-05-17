exports.message = (resetToken) => {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>Password Reset Email</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <style type="text/css">
#outlook a {
	padding:0;
}
.ExternalClass {
	width:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
	line-height:100%;
}
.box-shadow {
	box-shadow:0 0 7px 1px #5050501f;
}
.es-button {
	mso-style-priority:100!important;
	text-decoration:none!important;
}
a[x-apple-data-detectors] {
	color:inherit!important;
	text-decoration:none!important;
	font-size:inherit!important;
	font-family:inherit!important;
	font-weight:inherit!important;
	line-height:inherit!important;
}
.es-desk-hidden {
	display:none;
	float:left;
	overflow:hidden;
	width:0;
	max-height:0;
	line-height:0;
	mso-hide:all;
}
[data-ogsb] .es-button {
	border-width:0!important;
	padding:10px 25px 10px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:25px!important; text-align:center } h2 { font-size:22px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:25px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:22px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:13px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:11px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:14px!important; display:block!important; border-left-width:0px!important; border-right-width:0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style>
 </head>
 <body style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;padding:0;Margin:0">
  <div class="es-wrapper-color" style="background-color:#ececec"><!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#272727"></v:fill>
			</v:background>
		<![endif]-->
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#ececec">
     <tr style="border-collapse:collapse">
      <td valign="top" style="padding:0;Margin:0">
       <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr style="border-collapse:collapse">
          <td align="center" style="padding:0;Margin:0">
           <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ececec;width:600px">
             <tr style="border-collapse:collapse">
              <td align="left" style="Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:268px" valign="top"><![endif]-->
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0;width:268px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td class="es-m-p0l es-m-txt-c" align="left" style="padding:0;Margin:0;padding-top:15px;font-size:0px"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#0000FF;font-size:14px;"> <svg width="150px" height="auto" viewBox="0 0 2508 510" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1030_4)">
                    <path d="M737.2 394.8C714.8 394.8 693.333 391.867 672.8 386C652.267 379.867 635.733 372 623.2 362.4L645.2 313.6C657.2 322.133 671.333 329.2 687.6 334.8C704.133 340.133 720.8 342.8 737.6 342.8C750.4 342.8 760.667 341.6 768.4 339.2C776.4 336.533 782.267 332.933 786 328.4C789.733 323.867 791.6 318.667 791.6 312.8C791.6 305.333 788.667 299.467 782.8 295.2C776.933 290.667 769.2 287.067 759.6 284.4C750 281.467 739.333 278.8 727.6 276.4C716.133 273.733 704.533 270.533 692.8 266.8C681.333 263.067 670.8 258.267 661.2 252.4C651.6 246.533 643.733 238.8 637.6 229.2C631.733 219.6 628.8 207.333 628.8 192.4C628.8 176.4 633.067 161.867 641.6 148.8C650.4 135.467 663.467 124.933 680.8 117.2C698.4 109.2 720.4 105.2 746.8 105.2C764.4 105.2 781.733 107.333 798.8 111.6C815.867 115.6 830.933 121.733 844 130L824 179.2C810.933 171.733 797.867 166.267 784.8 162.8C771.733 159.067 758.933 157.2 746.4 157.2C733.867 157.2 723.6 158.667 715.6 161.6C707.6 164.533 701.867 168.4 698.4 173.2C694.933 177.733 693.2 183.067 693.2 189.2C693.2 196.4 696.133 202.267 702 206.8C707.867 211.067 715.6 214.533 725.2 217.2C734.8 219.867 745.333 222.533 756.8 225.2C768.533 227.867 780.133 230.933 791.6 234.4C803.333 237.867 814 242.533 823.6 248.4C833.2 254.267 840.933 262 846.8 271.6C852.933 281.2 856 293.333 856 308C856 323.733 851.6 338.133 842.8 351.2C834 364.267 820.8 374.8 803.2 382.8C785.867 390.8 763.867 394.8 737.2 394.8ZM983.878 393.2C958.545 393.2 938.811 386.8 924.678 374C910.545 360.933 903.478 341.6 903.478 316V127.2H965.878V315.2C965.878 324.267 968.278 331.333 973.078 336.4C977.878 341.2 984.411 343.6 992.678 343.6C1002.54 343.6 1010.94 340.933 1017.88 335.6L1034.68 379.6C1028.28 384.133 1020.54 387.6 1011.48 390C1002.68 392.133 993.478 393.2 983.878 393.2ZM870.278 227.6V179.6H1019.48V227.6H870.278ZM1160.51 393.2C1142.64 393.2 1126.64 389.733 1112.51 382.8C1098.64 375.867 1087.84 365.333 1080.11 351.2C1072.37 336.8 1068.51 318.533 1068.51 296.4V174.8H1130.91V287.2C1130.91 305.067 1134.64 318.267 1142.11 326.8C1149.84 335.067 1160.64 339.2 1174.51 339.2C1184.11 339.2 1192.64 337.2 1200.11 333.2C1207.57 328.933 1213.44 322.533 1217.71 314C1221.97 305.2 1224.11 294.267 1224.11 281.2V174.8H1286.51V390H1227.31V330.8L1238.11 348C1230.91 362.933 1220.24 374.267 1206.11 382C1192.24 389.467 1177.04 393.2 1160.51 393.2ZM1436.72 393.2C1416.45 393.2 1398.18 388.667 1381.92 379.6C1365.65 370.267 1352.72 357.333 1343.12 340.8C1333.78 324.267 1329.12 304.8 1329.12 282.4C1329.12 259.733 1333.78 240.133 1343.12 223.6C1352.72 207.067 1365.65 194.267 1381.92 185.2C1398.18 176.133 1416.45 171.6 1436.72 171.6C1454.85 171.6 1470.72 175.6 1484.32 183.6C1497.92 191.6 1508.45 203.733 1515.92 220C1523.38 236.267 1527.12 257.067 1527.12 282.4C1527.12 307.467 1523.52 328.267 1516.32 344.8C1509.12 361.067 1498.72 373.2 1485.12 381.2C1471.78 389.2 1455.65 393.2 1436.72 393.2ZM1447.52 342C1457.65 342 1466.85 339.6 1475.12 334.8C1483.38 330 1489.92 323.2 1494.72 314.4C1499.78 305.333 1502.32 294.667 1502.32 282.4C1502.32 269.867 1499.78 259.2 1494.72 250.4C1489.92 241.6 1483.38 234.8 1475.12 230C1466.85 225.2 1457.65 222.8 1447.52 222.8C1437.12 222.8 1427.78 225.2 1419.52 230C1411.25 234.8 1404.58 241.6 1399.52 250.4C1394.72 259.2 1392.32 269.867 1392.32 282.4C1392.32 294.667 1394.72 305.333 1399.52 314.4C1404.58 323.2 1411.25 330 1419.52 334.8C1427.78 339.6 1437.12 342 1447.52 342ZM1503.92 390V346L1505.12 282L1501.12 218.4V93.2H1563.52V390H1503.92ZM1728.07 393.2C1703.54 393.2 1681.94 388.4 1663.27 378.8C1644.87 369.2 1630.6 356.133 1620.47 339.6C1610.34 322.8 1605.27 303.733 1605.27 282.4C1605.27 260.8 1610.2 241.733 1620.07 225.2C1630.2 208.4 1643.94 195.333 1661.27 186C1678.6 176.4 1698.2 171.6 1720.07 171.6C1741.14 171.6 1760.07 176.133 1776.87 185.2C1793.94 194 1807.4 206.8 1817.27 223.6C1827.14 240.133 1832.07 260 1832.07 283.2C1832.07 285.6 1831.94 288.4 1831.67 291.6C1831.4 294.533 1831.14 297.333 1830.87 300H1656.07V263.6H1798.07L1774.07 274.4C1774.07 263.2 1771.8 253.467 1767.27 245.2C1762.74 236.933 1756.47 230.533 1748.47 226C1740.47 221.2 1731.14 218.8 1720.47 218.8C1709.8 218.8 1700.34 221.2 1692.07 226C1684.07 230.533 1677.8 237.067 1673.27 245.6C1668.74 253.867 1666.47 263.733 1666.47 275.2V284.8C1666.47 296.533 1669 306.933 1674.07 316C1679.4 324.8 1686.74 331.6 1696.07 336.4C1705.67 340.933 1716.87 343.2 1729.67 343.2C1741.14 343.2 1751.14 341.467 1759.67 338C1768.47 334.533 1776.47 329.333 1783.67 322.4L1816.87 358.4C1807 369.6 1794.6 378.267 1779.67 384.4C1764.74 390.267 1747.54 393.2 1728.07 393.2ZM2004.41 171.6C2021.48 171.6 2036.68 175.067 2050.01 182C2063.61 188.667 2074.28 199.067 2082.01 213.2C2089.75 227.067 2093.61 244.933 2093.61 266.8V390H2031.21V276.4C2031.21 259.067 2027.35 246.267 2019.61 238C2012.15 229.733 2001.48 225.6 1987.61 225.6C1977.75 225.6 1968.81 227.733 1960.81 232C1953.08 236 1946.95 242.267 1942.41 250.8C1938.15 259.333 1936.01 270.267 1936.01 283.6V390H1873.61V174.8H1933.21V234.4L1922.01 216.4C1929.75 202 1940.81 190.933 1955.21 183.2C1969.61 175.467 1986.01 171.6 2004.41 171.6ZM2238.18 393.2C2212.84 393.2 2193.11 386.8 2178.98 374C2164.84 360.933 2157.78 341.6 2157.78 316V127.2H2220.18V315.2C2220.18 324.267 2222.58 331.333 2227.38 336.4C2232.18 341.2 2238.71 343.6 2246.98 343.6C2256.84 343.6 2265.24 340.933 2272.18 335.6L2288.98 379.6C2282.58 384.133 2274.84 387.6 2265.78 390C2256.98 392.133 2247.78 393.2 2238.18 393.2ZM2124.58 227.6V179.6H2273.78V227.6H2124.58ZM2396.4 393.2C2378 393.2 2360.27 391.067 2343.2 386.8C2326.4 382.267 2313.07 376.667 2303.2 370L2324 325.2C2333.87 331.333 2345.47 336.4 2358.8 340.4C2372.4 344.133 2385.74 346 2398.8 346C2413.2 346 2423.34 344.267 2429.2 340.8C2435.34 337.333 2438.4 332.533 2438.4 326.4C2438.4 321.333 2436 317.6 2431.2 315.2C2426.67 312.533 2420.54 310.533 2412.8 309.2C2405.07 307.867 2396.54 306.533 2387.2 305.2C2378.14 303.867 2368.94 302.133 2359.6 300C2350.27 297.6 2341.74 294.133 2334 289.6C2326.27 285.067 2320 278.933 2315.2 271.2C2310.67 263.467 2308.4 253.467 2308.4 241.2C2308.4 227.6 2312.27 215.6 2320 205.2C2328 194.8 2339.47 186.667 2354.4 180.8C2369.34 174.667 2387.2 171.6 2408 171.6C2422.67 171.6 2437.6 173.2 2452.8 176.4C2468 179.6 2480.67 184.267 2490.8 190.4L2470 234.8C2459.6 228.667 2449.07 224.533 2438.4 222.4C2428 220 2417.87 218.8 2408 218.8C2394.14 218.8 2384 220.667 2377.6 224.4C2371.2 228.133 2368 232.933 2368 238.8C2368 244.133 2370.27 248.133 2374.8 250.8C2379.6 253.467 2385.87 255.6 2393.6 257.2C2401.34 258.8 2409.74 260.267 2418.8 261.6C2428.14 262.667 2437.47 264.4 2446.8 266.8C2456.14 269.2 2464.54 272.667 2472 277.2C2479.74 281.467 2486 287.467 2490.8 295.2C2495.6 302.667 2498 312.533 2498 324.8C2498 338.133 2494 350 2486 360.4C2478 370.533 2466.4 378.533 2451.2 384.4C2436.27 390.267 2418 393.2 2396.4 393.2Z" fill="black"/>
                    <path d="M57.594 41V283.563L137.594 314.093V290C115.09 286.783 92.529 281.367 75.064 263.156L88.564 250.219C100.714 262.886 117.596 267.482 136.844 270.593L110.656 53.03C93.3 49.725 75.492 46.1 57.594 41ZM454.719 41.03C389.541 58.422 316.365 41.132 263.499 111.844V320.656C283.294 291.506 308.942 279.79 334.219 274.126C368.133 266.523 400.399 266.963 425.719 246.5L437.469 261.03C406.213 286.293 369.219 285.416 338.311 292.344C309.016 298.91 284.333 309.974 266.061 355.531L454.718 283.564V41.03H454.719ZM128.81 47.28L156.217 275.437L156.277 276V492.906L176.217 453.626L196.685 491.781V294.814L168.563 55.5L128.813 47.28H128.81ZM189.28 71.53L214.873 289.312C219.048 291.612 223.131 294.272 227.061 297.375C233.513 302.472 239.473 308.735 244.811 316.345V107.5C229.315 90.025 210.41 79.173 189.28 71.53ZM20.5 72.376V312.189L26.625 314.439L137.595 355.219V335.313L39.188 299.157V72.376H20.5ZM473.094 72.406V299.156L256.156 378.846L215.376 363.876V402.156C238.586 410.186 273.454 408.969 301.626 399.626V382.063L485.656 314.438L491.781 312.188V72.407H473.095L473.094 72.406ZM215.374 311.938V343.751L242.938 354.281C235.898 333.434 226.373 320.621 215.5 312.031C215.46 312.001 215.416 311.971 215.375 311.939L215.374 311.938Z" fill="#B05500"/>
                    </g>
                    <path d="M589.8 398.8C589.8 405.133 588.2 410.067 585 413.6C581.733 417.133 576.9 418.9 570.5 418.9H523.3V403.3H570.3C572.567 403.3 574.333 402.7 575.6 401.5C576.8 400.3 577.4 398.667 577.4 396.6C577.4 394.133 576.733 392.033 575.4 390.3L586.4 386.1C587.533 387.7 588.4 389.633 589 391.9C589.533 394.1 589.8 396.4 589.8 398.8ZM548.4 427.2H536.4V389.9H548.4V427.2ZM589 377.343H535.2V362.443H550.4L546 364.543C542.2 362.943 539.333 360.376 537.4 356.843C535.4 353.31 534.4 349.01 534.4 343.943H548.8C548.733 344.61 548.7 345.21 548.7 345.743C548.633 346.276 548.6 346.843 548.6 347.443C548.6 351.71 549.833 355.176 552.3 357.843C554.7 360.443 558.467 361.743 563.6 361.743H589V377.343ZM589 305.183H578.5L576.2 306.183H557.4C554.067 306.183 551.467 307.216 549.6 309.283C547.733 311.283 546.8 314.383 546.8 318.583C546.8 321.449 547.267 324.283 548.2 327.083C549.067 329.816 550.267 332.149 551.8 334.083L540.9 339.683C538.833 336.749 537.233 333.216 536.1 329.083C534.967 324.949 534.4 320.749 534.4 316.483C534.4 308.283 536.333 301.916 540.2 297.383C544.067 292.849 550.1 290.583 558.3 290.583H589V305.183ZM589.8 321.583C589.8 325.783 589.1 329.383 587.7 332.383C586.233 335.383 584.267 337.683 581.8 339.283C579.333 340.883 576.567 341.683 573.5 341.683C570.3 341.683 567.5 340.916 565.1 339.383C562.7 337.783 560.833 335.283 559.5 331.883C558.1 328.483 557.4 324.049 557.4 318.583V304.283H566.5V316.883C566.5 320.549 567.1 323.083 568.3 324.483C569.5 325.816 571 326.483 572.8 326.483C574.8 326.483 576.4 325.716 577.6 324.183C578.733 322.583 579.3 320.416 579.3 317.683C579.3 315.083 578.7 312.749 577.5 310.683C576.233 308.616 574.4 307.116 572 306.183L579.2 303.783C582.667 304.916 585.3 306.983 587.1 309.983C588.9 312.983 589.8 316.849 589.8 321.583ZM589.8 250.073C589.8 255.873 588.633 261.04 586.3 265.573C583.9 270.107 580.6 273.673 576.4 276.273C572.2 278.807 567.433 280.073 562.1 280.073C556.7 280.073 551.933 278.807 547.8 276.273C543.6 273.673 540.333 270.107 538 265.573C535.6 261.04 534.4 255.873 534.4 250.073C534.4 244.407 535.6 239.473 538 235.273C540.333 231.073 543.7 227.973 548.1 225.973L554.6 238.073C552.067 239.473 550.2 241.24 549 243.373C547.8 245.44 547.2 247.707 547.2 250.173C547.2 252.84 547.8 255.24 549 257.373C550.2 259.507 551.9 261.207 554.1 262.473C556.3 263.673 558.967 264.273 562.1 264.273C565.233 264.273 567.9 263.673 570.1 262.473C572.3 261.207 574 259.507 575.2 257.373C576.4 255.24 577 252.84 577 250.173C577 247.707 576.433 245.44 575.3 243.373C574.1 241.24 572.2 239.473 569.6 238.073L576.2 225.973C580.533 227.973 583.9 231.073 586.3 235.273C588.633 239.473 589.8 244.407 589.8 250.073ZM578 204.384L559 203.984L535.2 178.884V160.284L559.7 184.384L566.3 192.484L578 204.384ZM589 217.284H514.8V201.684H589V217.284ZM589 177.184L566.4 195.384L554.3 185.584L589 158.284V177.184ZM589.8 126.815C589.8 132.948 588.6 138.348 586.2 143.015C583.8 147.615 580.533 151.182 576.4 153.715C572.2 156.248 567.433 157.515 562.1 157.515C556.7 157.515 551.933 156.282 547.8 153.815C543.6 151.282 540.333 147.848 538 143.515C535.6 139.182 534.4 134.282 534.4 128.815C534.4 123.548 535.533 118.815 537.8 114.615C540 110.348 543.2 106.982 547.4 104.515C551.533 102.048 556.5 100.815 562.3 100.815C562.9 100.815 563.6 100.848 564.4 100.915C565.133 100.982 565.833 101.048 566.5 101.115V144.815H557.4V109.315L560.1 115.315C557.3 115.315 554.867 115.882 552.8 117.015C550.733 118.148 549.133 119.715 548 121.715C546.8 123.715 546.2 126.048 546.2 128.715C546.2 131.382 546.8 133.748 548 135.815C549.133 137.815 550.767 139.382 552.9 140.515C554.967 141.648 557.433 142.215 560.3 142.215H562.7C565.633 142.215 568.233 141.582 570.5 140.315C572.7 138.982 574.4 137.148 575.6 134.815C576.733 132.415 577.3 129.615 577.3 126.415C577.3 123.548 576.867 121.048 576 118.915C575.133 116.715 573.833 114.715 572.1 112.915L581.1 104.615C583.9 107.082 586.067 110.182 587.6 113.915C589.067 117.648 589.8 121.948 589.8 126.815ZM589 90.4289H535.2V75.5289H550.4L546 77.6289C542.2 76.0289 539.333 73.4622 537.4 69.9289C535.4 66.3956 534.4 62.0956 534.4 57.0289H548.8C548.733 57.6956 548.7 58.2956 548.7 58.8289C548.633 59.3622 548.6 59.9289 548.6 60.5289C548.6 64.7956 549.833 68.2622 552.3 70.9289C554.7 73.5289 558.467 74.8289 563.6 74.8289H589V90.4289Z" fill="black"/>
                    <defs>
                    <clipPath id="clip0_1030_4">
                    <rect width="2508" height="498" fill="white" transform="translate(0 12)"/>
                    </clipPath>
                    </defs>
                    </svg></a></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:272px" valign="top"><![endif]-->
               <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0;width:272px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr style="border-collapse:collapse">
          <td align="center" style="padding:0;Margin:0;background-color:transparent" bgcolor="transparent">
           <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ececec;background-repeat:no-repeat;width:600px;" >
             <tr style="border-collapse:collapse">
              <td align="left" style="padding:0;Margin:0;padding-top:20px">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0;width:600px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr class="es-mobile-hidden" style="border-collapse:collapse">
                      <td align="center" height="47" style="padding:0;Margin:0"></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-left:25px;padding-right:25px"><h1 style="Margin:0;line-height:45px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#b05500">Восстанавливаете пароль?<br>Ваш секретный код!</h1></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr style="border-collapse:collapse">
              <td class="esdev-adapt-off" align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px">
               <table cellpadding="0" cellspacing="0" class="esdev-mso-table" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
                 <tr style="border-collapse:collapse">
                  <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                   <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                     <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0;width:60px">
                       <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#FFFFFF;font-size:14px"><br></p></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                  <td style="padding:0;Margin:0;width:20px"></td>
                  <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                    <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                      <tr style="border-collapse:collapse">
                       <td align="center" class="es-m-p10r es-m-p10l" style="padding:0;Margin:0;width:50px">
                        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-width:2px;border-style:solid;border-color:#b05500;border-radius:12px" role="presentation">
                          <tr style="border-collapse:collapse">
                           <td align="center" class="es-m-p10r es-m-p10l" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#b05500">${resetToken[0]}</h1></td>
                          </tr>
                        </table></td>
                      </tr>
                    </table></td>
                  <td style="padding:0;Margin:0;width:20px"></td>
                  <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                    <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                      <tr style="border-collapse:collapse">
                       <td align="center" class="es-m-p10r es-m-p10l" style="padding:0;Margin:0;width:50px">
                        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-width:2px;border-style:solid;border-color:#b05500;border-radius:12px" role="presentation">
                          <tr style="border-collapse:collapse">
                           <td align="center" class="es-m-p10r es-m-p10l" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#b05500">${resetToken[1]}</h1></td>
                          </tr>
                        </table></td>
                      </tr>
                    </table></td>
                  <td style="padding:0;Margin:0;width:20px"></td>
                  <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                   <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                     <tr style="border-collapse:collapse">
                      <td align="center" class="es-m-p10r es-m-p10l" style="padding:0;Margin:0;width:50px">
                       <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-width:2px;border-style:solid;border-color:#b05500;border-radius:12px" role="presentation">
                         <tr style="border-collapse:collapse">
                          <td align="center" class="es-m-p10r es-m-p10l" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#b05500">${resetToken[2]}</h1></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                  <td style="padding:0;Margin:0;width:20px"></td>
                  <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                   <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                     <tr style="border-collapse:collapse">
                      <td align="center" class="es-m-p10r es-m-p10l" style="padding:0;Margin:0;width:50px">
                       <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-width:2px;border-style:solid;border-color:#b05500;border-radius:12px" role="presentation">
                         <tr style="border-collapse:collapse">
                          <td align="center" class="es-m-p10r es-m-p10l" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#b05500">${resetToken[3]}</h1></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                  <td style="padding:0;Margin:0;width:20px"></td>
                  <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                   <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                     <tr style="border-collapse:collapse">
                      <td align="center" class="es-m-p10r es-m-p10l" style="padding:0;Margin:0;width:50px">
                       <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-width:2px;border-style:solid;border-color:#b05500;border-radius:12px" role="presentation">
                         <tr style="border-collapse:collapse">
                          <td align="center" class="es-m-p10r es-m-p10l" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#b05500">${resetToken[4]}</h1></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                  <td style="padding:0;Margin:0;width:20px"></td>
                  <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                   <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                     <tr style="border-collapse:collapse">
                      <td align="center" class="es-m-p10r es-m-p10l" style="padding:0;Margin:0;width:50px">
                       <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-width:2px;border-style:solid;border-color:#b05500;border-radius:12px" role="presentation">
                         <tr style="border-collapse:collapse">
                          <td align="center" class="es-m-p10r es-m-p10l" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#b05500">${resetToken[5]}</h1></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                  <td style="padding:0;Margin:0;width:20px"></td>
                  <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                   <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                     <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0;width:60px">
                       <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#FFFFFF;font-size:14px"><br></p></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr style="border-collapse:collapse">
              <td align="left" style="padding:0;Margin:0;padding-top:10px;background-position:center top">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td align="center" height="58" style="padding:0;Margin:0"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr style="border-collapse:collapse">
          <td align="center" style="padding:0;Margin:0">
           <table bgcolor="#FFFFFF" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
             <tr style="border-collapse:collapse">
              <td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-position:center top">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top" role="presentation">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#999999;font-size:12px">Данное сообщение сформировано автоматически и не требует ответа.</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table>
  </div>
 </body>
</html>
    `
}