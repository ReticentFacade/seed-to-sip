import React, { useEffect } from 'react';
import anime from 'animejs';
import '../../css/Cycle.css';

const Cycle = () => {
  useEffect(() => {
    const roadAnimation = anime({
      targets: '#cycle #firstRoad, #XMLID_34_',
      translateY: -7,
      easing: 'easeInOutSine',
      duration: 1000,
      delay: (el, i) => i * 250,
      direction: 'alternate',
      loop: true,
    });

    const tyreAnimation = anime({
      targets: '#cycle #tyre1, #tyre2',
      rotate: 360,
      easing: 'linear',
      loop: true,
      direction: 'reverse',
    });

    const pedalAnimation = anime({
      targets: '#cycle #padel',
      rotate: 360,
      easing: 'linear',
      loop: true,
      duration: 3000,
      direction: 'reverse',
    });

    return () => {
      // Clean up animations when the component unmounts
      roadAnimation.pause();
      tyreAnimation.pause();
      pedalAnimation.pause();
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-8 mx-auto">
          <svg
            version="1.1"
            id="cycle"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            style={{ enableBackground: 'new 0 0 1000 1000' }}
            xmlSpace="preserve"
          >
            {/* SVG paths and shapes go here */}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Cycle;


// import "../../css/Order/Cycle.css";

// const Cycle = () => {
//   var design = anime({
//     targets: "#cycle #firstRoad, #XMLID_34_",
//     translateY: -7,
//     easing: "easeInOutSine",
//     duration: 1000,
//     delay: function(el, i) {
//       return i * 250;
//     },
//     direction: "alternate",
//     loop: true,
//   });

//   var design = anime({
//     targets: "#cycle #tyre1,#tyre2",
//     rotate: 360,
//     easing: "linear",
//     loop: true,
//     direction: "reverse",
//   });

//   var design = anime({
//     targets: "#cycle #padel",
//     rotate: 360,
//     easing: "linear",
//     loop: true,
//     duration: 3000,
//     direction: "reverse",
//   });

//   return (

// <div class="container">
//   <div class="row">
//     <div class="col-md-8 col-sm-8 mx-auto">
// <svg version="1.1" id="cycle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
// 	 viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve">
// <rect id="XMLID_62_" class="st0" width="1000" height="1000"/>

// <g>
// 	<ellipse id="XMLID_2_" class="st2" cx="262.2" cy="775.5" rx="121.5" ry="11.4"/>
// 	<ellipse id="XMLID_4_" class="st2" cx="803.4" cy="783.9" rx="121.5" ry="11.4"/>
// 	<g id="XMLID_90_">
// 		<g id="XMLID_319_">
// 			<path id="XMLID_322_" class="st3" d="M316.1,510.9l-23.6-11c-1.5-0.7-2.2-2.5-1.5-4v0c0.7-1.5,2.5-2.2,4-1.5l23.6,11
// 				c1.5,0.7,2.2,2.5,1.5,4l0,0C319.4,510.9,317.6,511.6,316.1,510.9z"/>
// 			<path id="XMLID_321_" class="st3" d="M318.7,505.4l-23.6-11c-1.5-0.7-2.2-2.5-1.5-4l0,0c0.7-1.5,2.5-2.2,4-1.5l23.6,11
// 				c1.5,0.7,2.2,2.5,1.5,4v0C322,505.5,320.2,506.1,318.7,505.4z"/>
// 			<path id="XMLID_320_" class="st3" d="M321.2,500l-23.6-11c-1.5-0.7-2.2-2.5-1.5-4l0,0c0.7-1.5,2.5-2.2,4-1.5l23.6,11
// 				c1.5,0.7,2.2,2.5,1.5,4l0,0C324.5,500.1,322.7,500.7,321.2,500z"/>
// 		</g>
// 	</g>
// 	<path id="XMLID_55_" class="st4" d="M589.3,495.7l10.3,20.2c3.1,6.1-1.5,13.3-8.4,12.9l-19.3-1L589.3,495.7z"/>
	
// 		<rect id="XMLID_186_" x="627.4" y="594.8" transform="matrix(0.866 -0.5 0.5 0.866 -215.5766 399.8123)" class="st5" width="21.8" height="14.8"/>
	
// 		<rect id="XMLID_54_" x="627.4" y="594.8" transform="matrix(0.866 -0.5 0.5 0.866 -215.5766 399.8123)" class="st6" width="21.8" height="14.8"/>
// 	<path id="XMLID_52_" class="st6" d="M589.3,495.7l10.3,20.2c3.1,6.1-1.5,13.3-8.4,12.9l-19.3-1L589.3,495.7z"/>
// 	<polygon id="sitroad" class="st7" points="568.1,484.8 686.4,332.7 705.1,335.9 586.9,501.6 	"/>
// 	<polygon id="XMLID_264_" class="st8" points="696.6,334.4 581,496.3 586.9,501.6 705.1,335.9 	"/>
// 	<polygon id="XMLID_188_" class="st8" points="678.1,343.3 692.5,350.8 697,340.2 690.3,334.4 	"/>
// 	<polygon id="XMLID_41_" class="st6" points="568.1,484.8 686.4,332.7 705.1,335.9 586.9,501.6 	"/>
// 	<path id="XMLID_63_" class="st5" d="M760.2,308.5l-1,0.2c-21.6,3.9-43.5,4.7-65.3,2.5l-35.1-2c-6.6-0.4-13,2.6-17.3,8.1l-8.2,10.7
// 		c-1.1,1.5-0.4,3.7,1.3,4.1c0,0,41.5,0.5,78.4,17.5c3.5,1.6,7.5,1.7,11-0.2c12.7-6.8,42-22.8,42-22.8c3.6-2,5.6-6.4,4.6-10.9
// 		C769.5,310.7,764.9,307.6,760.2,308.5z"/>
// 	<path id="XMLID_334_" class="st7" d="M634.6,332c0,0,0.6,0,1.7,0l5.3-6.8c4.3-5.5,10.6-8.5,17.3-8.1l39.9,6.8
// 		c21.8,2.3,35.7,0.5,60.4-7.3l1-0.2c4.1-0.7,8.2,1.5,9.9,5.5c0.8-1.9,1-4.1,0.5-6.3c-1.1-5-5.7-8-10.4-7.2l-1,0.2
// 		c-21.6,3.9-43.5,4.7-65.3,2.5l-35.1-2c-6.6-0.4-13,2.6-17.3,8.1l-8.2,10.7C632.2,329.4,632.9,331.6,634.6,332z"/>
// 	<path id="XMLID_47_" class="st6" d="M760.2,308.5l-1,0.2c-21.6,3.9-43.5,4.7-65.3,2.5l-35.1-2c-6.6-0.4-13,2.6-17.3,8.1l-8.2,10.7
// 		c-1.1,1.5-0.4,3.7,1.3,4.1c0,0,41.5,0.5,78.4,17.5c3.5,1.6,7.5,1.7,11-0.2c12.7-6.8,42-22.8,42-22.8c3.6-2,5.6-6.4,4.6-10.9
// 		C769.5,310.7,764.9,307.6,760.2,308.5z"/>
//   <g id="firstRoad">
// 	<path id="XMLID_122_" class="st7" d="M316.1,529.2c4.6-10.1-0.4-18-10.4-22.8c0,0-0.1-0.1-0.1-0.1c0,0-2.5-1.1-2.8-1.2
// 		c-10.4-5.1-20.1-1.7-24.9,9c-21.5,47.8-39,97.3-52.2,148c7.1,1.8,14.2,3.7,21.3,5.5c10.4-40,23.5-79.1,39.2-117.3
// 		c2.1-5.1,6.9-8.5,12.2-8.6C306.3,541.7,312.7,536.7,316.1,529.2z"/>
// 	<line id="XMLID_179_" class="st9" x1="245.5" y1="617.5" x2="282" y2="521.8"/>
//     <path id="XMLID_187_" class="st9" d="M285.7,515.6c0,0,3-5.7,7.7-5.7"/>
// 	<path id="XMLID_257_" class="st10" d="M314.7,513.2c-0.2,1.8-0.7,3.7-1.6,5.7c-3.4,7.5-9.8,12.4-17.6,12.5
// 		c-5.3,0.1-10.2,3.5-12.2,8.6c-15.7,38.1-28.8,77.3-39.2,117.3c-5.3-1.4-10.6-2.8-15.9-4.1c-0.8,3-1.6,5.9-2.4,8.9
// 		c7.1,1.8,14.2,3.7,21.3,5.5c10.4-40,23.5-79.1,39.2-117.3c2.1-5.1,6.9-8.5,12.2-8.6c7.8-0.1,14.2-5,17.6-12.5
// 		C318.9,523,318.1,517.6,314.7,513.2z"/>
// 	<path id="XMLID_36_" class="st6" d="M316.1,529.2c4.6-10.1-0.4-18-10.4-22.8c0,0-0.1-0.1-0.1-0.1c0,0-2.5-1.1-2.8-1.2
// 		c-10.4-5.1-20.1-1.7-24.9,9c-21.5,47.8-39,97.3-52.2,148c7.1,1.8,14.2,3.7,21.3,5.5c10.4-40,23.5-79.1,39.2-117.3
// 		c2.1-5.1,6.9-8.5,12.2-8.6C306.3,541.7,312.7,536.7,316.1,529.2z"/>
//     </g>
// 	<path id="XMLID_20_" class="st11" d="M771.8,688.4l-236-0.5c-23-0.5-40.7-20.5-38.4-43.4v0c2.3-22.9,23.7-38.9,46.3-34.8
// 		l232.6,33.8L771.8,688.4z"/>
// 	<line id="XMLID_313_" class="st12" x1="550.1" y1="623.9" x2="771" y2="648.8"/>
// 	<path id="XMLID_231_" class="st13" d="M562.8,663.2c-23-0.5-40.7-20.5-38.4-43.4v0c0.3-3.3,1.1-6.4,2.1-9.3
// 		c-15.3,4.1-27.4,17.2-29.1,34.1v0c-2.3,22.9,15.4,42.9,38.4,43.4l236,0.5l2.5-24.8L562.8,663.2z"/>
// 	<g id="XMLID_348_">
// 		<g id="XMLID_401_">
// 			<g id="XMLID_404_">
// 				<path id="XMLID_405_" class="st4" d="M525.4,614.4c0.3-1.3,0.7-2.6,1.2-3.9c-0.4,0.1-0.9,0.2-1.3,0.4
// 					C525.3,612,525.3,613.2,525.4,614.4z"/>
// 			</g>
// 			<g id="XMLID_402_">
// 				<path id="XMLID_403_" class="st4" d="M772.9,675.7l-236-0.5c-20.5-0.4-36.8-16.4-38.4-36.1c-0.4,1.8-0.8,3.6-1,5.5v0
// 					c-2.3,22.9,15.4,42.9,38.4,43.4l236,0.5l2.5-24.8l-0.3,0L772.9,675.7z"/>
// 			</g>
// 		</g>
// 	</g>
// 	<path id="XMLID_125_" class="st6" d="M562.8,663.2c-23-0.5-40.7-20.5-38.4-43.4v0c0.3-3.3,1.1-6.4,2.1-9.3
// 		c-15.3,4.1-27.4,17.2-29.1,34.1v0c-2.3,22.9,15.4,42.9,38.4,43.4l236,0.5l2.5-24.8L562.8,663.2z"/>
// 	<path id="XMLID_38_" class="st6" d="M771.8,688.4l-236-0.5c-23-0.5-40.7-20.5-38.4-43.4v0c2.3-22.9,23.7-38.9,46.3-34.8l232.6,33.8
// 		L771.8,688.4z"/>
// 	<g id="XMLID_34_">
// 		<g id="XMLID_139_">
// 			<path id="XMLID_142_" class="st6" d="M316.1,510.9l-23.6-11c-1.5-0.7-2.2-2.5-1.5-4v0c0.7-1.5,2.5-2.2,4-1.5l23.6,11
// 				c1.5,0.7,2.2,2.5,1.5,4l0,0C319.4,510.9,317.6,511.6,316.1,510.9z"/>
// 			<path id="XMLID_141_" class="st6" d="M318.7,505.4l-23.6-11c-1.5-0.7-2.2-2.5-1.5-4l0,0c0.7-1.5,2.5-2.2,4-1.5l23.6,11
// 				c1.5,0.7,2.2,2.5,1.5,4v0C322,505.5,320.2,506.1,318.7,505.4z"/>
// 			<path id="XMLID_140_" class="st6" d="M321.2,500l-23.6-11c-1.5-0.7-2.2-2.5-1.5-4l0,0c0.7-1.5,2.5-2.2,4-1.5l23.6,11
// 				c1.5,0.7,2.2,2.5,1.5,4l0,0C324.5,500.1,322.7,500.7,321.2,500z"/>
// 		</g>
// 	</g>
// 	<path id="XMLID_30_" class="st13" d="M324.4,494.7l-24.6-11.5c-1.7-0.8-2.5-2.8-1.7-4.6l43.6-93.5c0.8-1.7,2.8-2.5,4.6-1.7
// 		l24.6,11.5c1.7,0.8,2.5,2.8,1.7,4.6L329,493.1C328.2,494.8,326.1,495.5,324.4,494.7z"/>
// 	<path id="XMLID_281_" class="st4" d="M370.9,395l-24.6-11.5c-0.2-0.1-0.4-0.2-0.7-0.2l14.5,6.8c1.7,0.8,2.5,2.8,1.7,4.6l-43.6,93.5
// 		c-0.7,1.5-2.3,2.3-3.9,1.9l10.1,4.7c1.7,0.8,3.8,0.1,4.6-1.7l43.6-93.5C373.4,397.9,372.6,395.8,370.9,395z"/>
// 	<path id="XMLID_40_" class="st6" d="M324.4,494.7l-24.6-11.5c-1.7-0.8-2.5-2.8-1.7-4.6l43.6-93.5c0.8-1.7,2.8-2.5,4.6-1.7
// 		l24.6,11.5c1.7,0.8,2.5,2.8,1.7,4.6L329,493.1C328.2,494.8,326.1,495.5,324.4,494.7z"/>
// 	<path id="XMLID_29_" class="st13" d="M557.8,634.5c-1.7-9-2.6-18.3-2.6-27.8c0-55.7,41.4-114.6,41.4-114.6l-23.7-19.4l-20.8,21
// 		c-14.2,15.7-40.9,18.6-59.4,8.4l-140.1-62.9l-19.1,38.9l112.6,65.6c35.9,24.2,58.1,64.2,59.4,107.5l0.2,3.3
// 		c1,15.3,14.4,26.7,29.6,25.4h0c15.7-1.4,26.9-15.7,24.6-31.3L557.8,634.5z"/>
// 	<g id="XMLID_296_">
// 		<g id="XMLID_349_">
// 			<g id="XMLID_350_">
// 				<path id="XMLID_351_" class="st4" d="M519.6,653.9l-7.1-3.7c-1.5-48.7,3.7-88.2-56.8-124.2l-116.8-58.8l-5.3,10.9l112.6,65.6
// 					c35.9,24.2,55.8,57.3,59,100.3l2.4,1.7c0.7,11,7.8,20,17.5,23.7C521.9,665,519.9,659.7,519.6,653.9z"/>
// 			</g>
// 		</g>
// 	</g>
// 	<g id="XMLID_293_">
// 		<g id="XMLID_359_">
// 			<g id="XMLID_362_">
// 				<path id="XMLID_363_" class="st4" d="M557.8,634.5c-1.7-9-2.6-18.3-2.6-27.8c0-55.7,41.4-114.6,41.4-114.6l-5.3-4.3
// 					c-4,5.9-52,59.3-52,111.9c0,9.5-7.9,25.8-6.2,34.8l16.3,4.6c2.4,15.6-8.9,29.9-24.6,31.3h0c-5.3,0.5-10.3-0.6-14.7-2.8
// 					c5.3,8.1,14.9,13.2,25.2,12.2h0c15.7-1.4,26.9-15.7,24.6-31.3L557.8,634.5z"/>
// 			</g>
// 			<g id="XMLID_360_">
// 				<path id="XMLID_361_" class="st4" d="M435.5,534.3l-100.8-58.7l-1.2,2.6l112.6,65.6c3.2,2.1,6.2,4.4,9.1,6.7
// 					C449.2,544.5,442.7,539.1,435.5,534.3z"/>
// 			</g>
// 		</g>
// 	</g>
// 	<g id="XMLID_271_" class="st14">
// 		<g id="XMLID_381_">
// 			<g id="XMLID_384_">
// 				<path id="XMLID_385_" class="st15" d="M501.9,623.9c2.1,8.9,3.4,18,3.7,27.3l0.2,3.3c0.4,6.2,2.9,11.8,6.7,16.2
// 					C511.5,654.4,507.8,638.7,501.9,623.9z"/>
// 			</g>
// 			<g id="XMLID_382_">
// 				<path id="XMLID_383_" class="st15" d="M498.6,511.5c20.3,11.2,45.7,4.3,61.3-12.9l18-21.9l-5-4.1l-20.8,21
// 					c-14.2,15.7-40.9,18.6-59.4,8.4l-140.1-62.9l-2.8,5.6L498.6,511.5z"/>
// 			</g>
// 		</g>
// 	</g>
// 	<polygon id="XMLID_182_" class="st4" points="345.8,480.8 363.5,444 348.7,437.5 330.3,474.8 	"/>
// 	<path id="XMLID_45_" class="st6" d="M557.8,634.5c-1.7-9-2.6-18.3-2.6-27.8c0-55.7,41.4-114.6,41.4-114.6l-23.7-19.4l-20.8,21
// 		c-14.2,15.7-40.9,18.6-59.4,8.4l-140.1-62.9l-19.1,38.9l112.6,65.6c35.9,24.2,58.1,64.2,59.4,107.5l0.2,3.3
// 		c1,15.3,14.4,26.7,29.6,25.4h0c15.7-1.4,26.9-15.7,24.6-31.3L557.8,634.5z"/>
// 	<path id="XMLID_33_" class="st7" d="M380.5,348l25.3-143.5l-22.9-4l-27.4,155.6l-0.7,3.9c-0.8,4.6,1.2,9.1,4.8,10.7l16.5,7.3
// 		c3.8,1.7,7.8-2.8,6.7-7.4C381,363.3,379.4,354.4,380.5,348z"/>
// 	<path id="XMLID_203_" class="st8" d="M380.5,348l25.3-143.5l-22.9-4l-0.8,4.7l14.3,2.5L371,351.1c-1.1,6.4,0.4,15.3,2.2,22.5
// 		c0.3,1,0.2,2.1,0,3l2.8,1.2c3.8,1.7,7.8-2.8,6.7-7.4C381,363.3,379.4,354.4,380.5,348z"/>
// 	<path id="XMLID_48_" class="st6" d="M380.5,348l25.3-143.5l-22.9-4l-27.4,155.6l-0.7,3.9c-0.8,4.6,1.2,9.1,4.8,10.7l16.5,7.3
// 		c3.8,1.7,7.8-2.8,6.7-7.4C381,363.3,379.4,354.4,380.5,348z"/>
// 	<path id="XMLID_39_" class="st7" d="M370.9,395.3l-22.3-9c-4.6-1.9-6.8-7.1-5-11.7l0,0c1.9-4.6,7.1-6.8,11.7-5l22.3,9
// 		c4.6,1.9,6.8,7.1,5,11.7l0,0C380.8,394.9,375.5,397.1,370.9,395.3z"/>
// 	<path id="XMLID_206_" class="st8" d="M377.7,378.6l-7.8-3.2c2.4,2.5,3.3,6.3,1.9,9.7c-1.9,4.6-7.1,6.8-11.7,5l-14.4-5.8
// 		c0.8,0.8,1.9,1.5,3,2l22.3,9c4.6,1.9,9.9-0.4,11.7-5C384.5,385.7,382.3,380.4,377.7,378.6z"/>
// 	<path id="XMLID_42_" class="st6" d="M370.9,395.3l-22.3-9c-4.6-1.9-6.8-7.1-5-11.7l0,0c1.9-4.6,7.1-6.8,11.7-5l22.3,9
// 		c4.6,1.9,6.8,7.1,5,11.7l0,0C380.8,394.9,375.5,397.1,370.9,395.3z"/>
	
// 		<ellipse id="XMLID_228_" transform="matrix(0.883 -0.4694 0.4694 0.883 -52.2232 209.4556)" class="st16" cx="394" cy="209.5" rx="12.8" ry="17"/>
	
// 		<ellipse id="XMLID_44_" transform="matrix(0.883 -0.4694 0.4694 0.883 -51.9329 209.3833)" class="st6" cx="394" cy="208.9" rx="12.8" ry="17"/>
// 	<path id="XMLID_51_" class="st13" d="M624.2,549.6c-2-3.2-4.3-6.2-7-8.8c-5.2-5.1-10.3-10.2-15.4-15.3l0.1,0l-3.9-6.7
// 		c-1.9-3.3-6.1-4.4-9.3-2.5c-3.3,1.9-4.4,6.1-2.5,9.3l3.9,6.7l0.1,0c1.9,7,3.7,14,5.6,21c0.9,3.6,2.3,7.2,4.2,10.5
// 		c8.6,15.7,7.3,12.6,18.6,29.5l22.1-12.7C631.4,562.3,633.5,565,624.2,549.6z"/>
// 	<path id="XMLID_325_" class="st17" d="M592.1,522.6l3.9,6.7l-0.1,0c5.1,5.1,10.2,10.2,15.4,15.3c2.7,2.6,5,5.6,7,8.8
// 		c9.2,15.2,7.3,12.7,16.1,30.5l6-3.5c-9-18.2-7-15.5-16.3-30.8c-2-3.2-4.3-6.2-7-8.8c-5.2-5.1-10.3-10.2-15.4-15.3l0.1,0l-3.9-6.7
// 		c-1.9-3.3-6.1-4.4-9.3-2.5c-1.2,0.7-2.2,1.7-2.7,2.9C588.4,519.1,590.8,520.3,592.1,522.6z"/>
// 	<path id="XMLID_117_" class="st6" d="M624.2,549.6c-2-3.2-4.3-6.2-7-8.8c-5.2-5.1-10.3-10.2-15.4-15.3l0.1,0l-3.9-6.7
// 		c-1.9-3.3-6.1-4.4-9.3-2.5c-3.3,1.9-4.4,6.1-2.5,9.3l3.9,6.7l0.1,0c1.9,7,3.7,14,5.6,21c0.9,3.6,2.3,7.2,4.2,10.5
// 		c8.6,15.7,7.3,12.6,18.6,29.5l22.1-12.7C631.4,562.3,633.5,565,624.2,549.6z"/>
// 	<path id="XMLID_181_" class="st18" d="M646,593.9c-5.6,4.6-11.9,8.3-18.7,10.8c-3.2,1-7.3-0.7-8.9-3.4l0,0c-1.6-2.7-1-7.1,1.5-9.4
// 		c5.6-4.6,11.9-8.3,18.7-10.8c3.2-1,7.3,0.7,8.9,3.4l0,0C649,587.2,648.5,591.6,646,593.9z"/>
// 	<path id="XMLID_53_" class="st6" d="M646,593.9c-5.6,4.6-11.9,8.3-18.7,10.8c-3.2,1-7.3-0.7-8.9-3.4l0,0c-1.6-2.7-1-7.1,1.5-9.4
// 		c5.6-4.6,11.9-8.3,18.7-10.8c3.2-1,7.3,0.7,8.9,3.4l0,0C649,587.2,648.5,591.6,646,593.9z"/>
// 	<path id="XMLID_126_" class="st5" d="M638.2,622.5c-0.3,1.2-0.5,2.4-0.5,3.7c0,7.8,6.3,14.1,14.1,14.1c7.7,0,13.9-6.1,14.1-13.8
// 		L638.2,622.5z"/>
// 	<path id="XMLID_61_" class="st6" d="M638.2,622.5c-0.3,1.2-0.5,2.4-0.5,3.7c0,7.8,6.3,14.1,14.1,14.1c7.7,0,13.9-6.1,14.1-13.8
// 		L638.2,622.5z"/>
// 	<circle id="XMLID_57_" class="st7" cx="533.1" cy="651.5" r="28.9"/>
// 	<circle id="XMLID_58_" class="st6" cx="533.1" cy="651.5" r="28.9"/>
// 	<circle id="XMLID_279_" class="st6" cx="533.1" cy="651.5" r="28.9"/>
// 	<circle id="XMLID_83_" class="st10" cx="533.1" cy="651.5" r="17"/>
// 	<path id="XMLID_127_" class="st5" d="M655.5,631.3L655.5,631.3c-3,1.8-6.9,0.7-8.7-2.3l-10-17.4l11-6.4l10,17.4
// 		C659.5,625.7,658.5,629.6,655.5,631.3z"/>
// 	<path id="XMLID_56_" class="st6" d="M655.5,631.3L655.5,631.3c-3,1.8-6.9,0.7-8.7-2.3l-10-17.4l11-6.4l10,17.4
// 		C659.5,625.7,658.5,629.6,655.5,631.3z"/>
// 	<circle id="XMLID_128_" class="st6" cx="652.9" cy="626" r="4.9"/>
// 	<circle id="XMLID_227_" class="st6" cx="591.9" cy="521.8" r="4.2"/>
// 	<path id="XMLID_65_" class="st5" d="M541.5,636.8c0,0-6-13.3-1.4-43.3c4.7-30,9.9-43.3,9.9-43.3s-7.1,1.9-17,26.2
// 		c-9.9,24.5-10.8,60.4-10.8,60.4H541.5z"/>
// 	<path id="XMLID_75_" class="st6" d="M541.5,636.8L541.5,636.8c0,0-6-13.3-1.4-43.3c4.7-30,9.9-43.3,9.9-43.3s-7.1,1.9-17,26.2
// 		c-9,22.3-10.6,56.2-10.8,62c-3.8,3.1-6.2,7.8-6.2,13.1c0,9.4,7.6,17,17,17s17-7.6,17-17C550.1,645.2,546.6,639.7,541.5,636.8z"/>
//   <path id="XMLID_10_" class="st9" d="M535,583.9c0,0-4.2,12.3-6.1,27.6"/>
// 	<path id="XMLID_178_" class="st9" d="M527.5,619.3c0,0-0.9,14.4-0.9,17"/>
//   <g id="padel">
// 	<path id="XMLID_81_" class="st7" d="M535.1,660l-86.4-2.4c-2.4-0.1-4.4-2.5-4.4-5.5l0,0c0-3,2-5.5,4.4-5.5l86.4-2.4
// 		c2.5-0.1,4.6,2.4,4.6,5.6v4.9C539.8,657.6,537.7,660.1,535.1,660z"/>
// 	<path id="XMLID_59_" class="st6" d="M535.1,660l-86.4-2.4c-2.4-0.1-4.4-2.5-4.4-5.5l0,0c0-3,2-5.5,4.4-5.5l86.4-2.4
// 		c2.5-0.1,4.6,2.4,4.6,5.6v4.9C539.8,657.6,537.7,660.1,535.1,660z"/>

// 	<path id="XMLID_82_" class="st19" d="M456.9,673.3h-0.4c-3.7,0-6.8-3-6.8-6.8v-29c0-3.7,3-6.8,6.8-6.8h0.4c3.7,0,6.8,3,6.8,6.8v29
// 		C463.7,670.3,460.6,673.3,456.9,673.3z"/>
// 	<path id="XMLID_60_" class="st6" d="M456.9,673.3h-0.4c-3.7,0-6.8-3-6.8-6.8v-29c0-3.7,3-6.8,6.8-6.8h0.4c3.7,0,6.8,3,6.8,6.8v29
// 		C463.7,670.3,460.6,673.3,456.9,673.3z"/>
//     </g>
//   <line id="XMLID_124_" class="st6" x1="528.9" y1="652" x2="539.8" y2="652"/>
// 	<line id="XMLID_77_" class="st6" x1="628.3" y1="407.3" x2="645.2" y2="419.7"/>
// 	<line id="XMLID_78_" class="st20" x1="645.2" y1="421.2" x2="651" y2="425.3"/>
// 	<line id="XMLID_205_" class="st21" x1="641.6" y1="401.9" x2="680.5" y2="350.8"/>
// 	<path id="XMLID_74_" class="st22" d="M641.6,401.9"/>
// 	<line id="XMLID_84_" class="st21" x1="587.8" y1="472.5" x2="629.7" y2="417.1"/>
	
// 		<rect id="XMLID_49_" x="341.5" y="225.8" transform="matrix(0.9114 -0.4114 0.4114 0.9114 -62.7046 165.21)" class="st20" width="21.8" height="4.9"/>
// 	<path id="XMLID_93_" class="st16" d="M391,217.5L365.4,229l-5-11.1l25.5-11.5c2.5-1.1,5.5,0,6.6,2.5l0.9,1.9
// 		C394.6,213.4,393.5,216.4,391,217.5z"/>
// 	<path id="XMLID_46_" class="st6" d="M391,217.5L365.4,229l-5-11.1l25.5-11.5c2.5-1.1,5.5,0,6.6,2.5l0.9,1.9
// 		C394.6,213.4,393.5,216.4,391,217.5z"/>
// 	<ellipse id="XMLID_94_" class="st23" cx="340.5" cy="234.1" rx="5.7" ry="5.8"/>
// 	<ellipse id="XMLID_50_" class="st6" cx="340.5" cy="234.1" rx="7.5" ry="7.6"/>
// 	<ellipse id="XMLID_89_" class="st16" cx="340.5" cy="234.1" rx="7.5" ry="7.6"/>
	
// 		<rect id="XMLID_274_" x="401.9" y="197" transform="matrix(0.9114 -0.4114 0.4114 0.9114 -45.501 188.3981)" class="st24" width="25.9" height="5.7"/>
// 	<ellipse id="XMLID_263_" class="st23" cx="399.5" cy="203.6" rx="4.7" ry="4.8"/>
// 	<ellipse id="XMLID_259_" class="st6" cx="399.5" cy="203.6" rx="6.2" ry="6.3"/>
// 	<ellipse id="XMLID_240_" class="st16" cx="399.5" cy="203.6" rx="6.2" ry="6.3"/>
// 	<ellipse id="XMLID_282_" class="st16" cx="426.1" cy="193.3" rx="8.9" ry="9"/>
// 	<line id="XMLID_91_" class="st9" x1="363.4" y1="220" x2="378" y2="213.3"/>
// 	<line id="XMLID_92_" class="st9" x1="411.8" y1="199.9" x2="414.9" y2="198.5"/>
// 	<path id="XMLID_268_" class="st9" d="M363.7,343.9l-1.3,7.6c0,0-1.1,7.2-0.4,11s3.8,4.9,3.8,4.9"/>
// 	<line id="XMLID_230_" class="st9" x1="383.3" y1="228.3" x2="364.8" y2="336.3"/>
// 	<path id="XMLID_144_" class="st9" d="M245.5,617.5"/>
// 	<path id="XMLID_270_" class="st9" d="M372.9,390.8"/>
// 	<path id="XMLID_189_" class="st9" d="M350.8,381.8"/>
// 	<path id="XMLID_195_" class="st9" d="M353.2,374.1c0,0-3.1,0-4.1,2.9c-0.4,1.4-0.1,3.1,1.3,4.4"/>
// 	<path id="XMLID_255_" class="st25" d="M599.2,540.5c0,0,2,9.5,3.5,13.8c1.5,4.2,14.7,25.2,14.7,25.2"/>
// 	<path id="XMLID_297_" class="st25" d="M623.5,598.7c0,0-0.6-2.5,2.8-5.2c1.9-1.5,11.4-7.1,11.4-7.1"/>
// 	<line id="XMLID_305_" class="st9" x1="308.2" y1="478.1" x2="346.8" y2="395.9"/>
// 	<path id="XMLID_301_" class="st9" d="M388.4,199.9c0,0,2-3.9,8-2.5"/>
// 	<g id="tyre1">
// 		<g id="XMLID_123_">
// 			<circle id="XMLID_114_" class="st7" cx="236.8" cy="656" r="32"/>
// 			<circle id="XMLID_18_" class="st6" cx="236.8" cy="656" r="32"/>
// 			<path id="XMLID_113_" class="st26" d="M324.6,704.3l-56.9-37c-9.1-5.9-9.8-19-1.4-25.9l52.7-42.7l-9.2-11.4l-52.7,42.7
// 				c-8.4,6.8-21.1,3.4-25-6.7L207.8,560l-13.7,5.3l24.3,63.4c3.9,10.1-3.2,21.1-14.1,21.7l-67.8,3.6l0.8,14.7l67.8-3.6
// 				c10.9-0.6,19.1,9.6,16.3,20.1l-17.6,65.6l14.2,3.8l17.6-65.6c2.8-10.5,15.1-15.2,24.2-9.3l56.9,37L324.6,704.3z"/>
// 			<path id="XMLID_5_" class="st3" d="M208.7,747.9l16.5-61.7c1.6-6.1,0.4-12.4-3.4-17.3c-3.8-5-9.6-7.8-15.8-7.8
// 				c-0.4,0-0.7,0-1.1,0l-63.8,3.3l-0.3-6.7l63.8-3.3c6.5-0.3,12.2-3.6,15.7-9.1c3.5-5.4,4.2-12,1.9-18.1l-22.9-59.6l6.2-2.4
// 				l22.9,59.6c3,7.8,10.3,12.8,18.7,12.8c4.6,0,8.9-1.5,12.5-4.5l49.6-40.2l4.2,5.2l-49.6,40.2c-5,4.1-7.7,10.1-7.4,16.6
// 				c0.3,6.5,3.6,12.2,9.1,15.7l53.6,34.8l-3.6,5.6l-53.6-34.8c-3.3-2.1-7-3.2-10.9-3.2c-9.1,0-17,6.1-19.4,14.8l-16.5,61.7
// 				L208.7,747.9z"/>
// 			<path id="XMLID_28_" class="st6" d="M324.6,704.3l-56.9-37c-9.1-5.9-9.8-19-1.4-25.9l52.7-42.7l-9.2-11.4l-52.7,42.7
// 				c-8.4,6.8-21.1,3.4-25-6.7L207.8,560l-13.7,5.3l24.3,63.4c3.9,10.1-3.2,21.1-14.1,21.7l-67.8,3.6l0.8,14.7l67.8-3.6
// 				c10.9-0.6,19.1,9.6,16.3,20.1l-17.6,65.6l14.2,3.8l17.6-65.6c2.8-10.5,15.1-15.2,24.2-9.3l56.9,37L324.6,704.3z"/>
// 			<path id="XMLID_43_" class="st7" d="M267.3,542c-62.8-16.8-127.7,20.6-144.5,83.4s20.6,127.7,83.4,144.5s127.7-20.6,144.5-83.4
// 				C367.6,623.7,330.2,558.9,267.3,542z M210.9,752.6c-53.3-14.3-85-69.1-70.7-122.5c14.3-53.3,69.1-85,122.5-70.7
// 				s85,69.1,70.7,122.5C319.1,735.2,264.2,766.9,210.9,752.6z"/>
// 			<path id="XMLID_121_" class="st10" d="M267.3,542c-62.8-16.8-127.7,20.6-144.5,83.4c-16.8,62.8,20.6,127.7,83.4,144.5
// 				c62.8,16.8,127.7-20.6,144.5-83.4C367.6,623.7,330.2,558.9,267.3,542z M343,684.5c-12.9,48-56.6,81.5-106.3,81.5
// 				c-9.6,0-19.1-1.3-28.4-3.8c-28.3-7.6-52-25.8-66.7-51.3c-14.7-25.5-18.6-55.1-11-83.4c12.9-48,56.6-81.5,106.3-81.5
// 				c9.6,0,19.1,1.3,28.4,3.8c28.3,7.6,52,25.8,66.7,51.3S350.6,656.1,343,684.5z"/>
// 			<circle id="XMLID_22_" class="st6" cx="236.8" cy="656" r="100"/>
// 			<path id="XMLID_14_" class="st6" d="M267.3,542c-62.8-16.8-127.7,20.6-144.5,83.4s20.6,127.7,83.4,144.5s127.7-20.6,144.5-83.4
// 				C367.6,623.7,330.2,558.9,267.3,542z M210.9,752.6c-53.3-14.3-85-69.1-70.7-122.5c14.3-53.3,69.1-85,122.5-70.7
// 				s85,69.1,70.7,122.5C319.1,735.2,264.2,766.9,210.9,752.6z"/>
// 			<circle id="XMLID_12_" class="st6" cx="236.8" cy="656" r="118"/>
// 			<circle id="XMLID_16_" class="st20" cx="236.8" cy="656" r="118"/>
// 			<path id="XMLID_13_" class="st3" d="M262.6,559.4c-53.3-14.3-108.2,17.4-122.5,70.7c-14.3,53.3,17.4,108.2,70.7,122.5
// 				c53.3,14.3,108.2-17.4,122.5-70.7C347.7,628.5,316,573.7,262.6,559.4z M326.6,680.1c-13.3,49.5-64.4,79-113.9,65.8
// 				s-79-64.4-65.8-113.9s64.4-79,113.9-65.8C310.4,579.5,339.9,630.5,326.6,680.1z"/>
// 			<path id="XMLID_72_" class="st6" d="M262.6,559.4c-53.3-14.3-108.2,17.4-122.5,70.7c-14.3,53.3,17.4,108.2,70.7,122.5
// 				c53.3,14.3,108.2-17.4,122.5-70.7C347.7,628.5,316,573.7,262.6,559.4z M326.6,680.1c-13.3,49.5-64.4,79-113.9,65.8
// 				s-79-64.4-65.8-113.9s64.4-79,113.9-65.8C310.4,579.5,339.9,630.5,326.6,680.1z"/>
// 			<circle id="XMLID_115_" class="st7" cx="236.8" cy="656" r="17.9"/>
// 			<circle id="XMLID_1_" class="st12" cx="236.8" cy="656" r="17.9"/>
// 			<path id="XMLID_116_" class="st10" d="M248.7,659.2c-0.7-4.2,0.8-8.3,3.7-11.1c-2.2-4.3-6.1-7.7-11.1-9.1
// 				c-1.3-0.4-2.6-0.5-3.9-0.6c0,0.1-0.1,0.2-0.1,0.3c-2.3,6.2-8.9,9.4-15.1,7.5c-1,1.5-1.8,3.2-2.3,5.1c-1.2,4.5-0.5,9,1.5,12.8
// 				c0.1,0,0.2-0.1,0.3-0.1c6.5-1.1,12.6,3,14.1,9.3c6.4,0.4,12.5-2.8,15.9-8.2C250.2,663.6,249.1,661.6,248.7,659.2z"/>
// 			<circle id="XMLID_118_" class="st16" cx="236.8" cy="656" r="5.7"/>
// 			<circle id="XMLID_15_" class="st6" cx="236.8" cy="656" r="5.7"/>
// 			<path id="XMLID_21_" class="st12" d="M248.7,659.2c-0.7-4.2,0.8-8.3,3.7-11.1c-2.2-4.3-6.1-7.7-11.1-9.1
// 				c-1.3-0.4-2.6-0.5-3.9-0.6c0,0.1-0.1,0.2-0.1,0.3c-2.3,6.2-8.9,9.4-15.1,7.5c-1,1.5-1.8,3.2-2.3,5.1c-1.2,4.5-0.5,9,1.5,12.8
// 				c0.1,0,0.2-0.1,0.3-0.1c6.5-1.1,12.6,3,14.1,9.3c6.4,0.4,12.5-2.8,15.9-8.2C250.2,663.6,249.1,661.6,248.7,659.2z"/>
// 		</g>
// 		<path id="XMLID_9_" class="st27" d="M188.1,557.4c2.9-1.4,5.9-2.8,9-3.9"/>
// 		<path id="XMLID_3_" class="st27" d="M130.5,627.5c7-26.1,23.1-47.9,44.3-62.4"/>
// 	</g>
// 	<g id="tyre2">
// 		<g id="XMLID_23_">
// 			<circle id="XMLID_198_" class="st7" cx="785.5" cy="664" r="32"/>
// 			<circle id="XMLID_197_" class="st6" cx="785.5" cy="664" r="32"/>
// 			<path id="XMLID_194_" class="st26" d="M885.3,674.1l-66.8-11.8c-10.7-1.9-16.5-13.7-11.3-23.3l31.9-59.9l-13-6.9l-31.9,59.9
// 				c-5.1,9.6-18.1,11.4-25.6,3.6L721.4,587l-10.6,10.2l47.2,48.8c7.6,7.8,5.3,20.7-4.5,25.5l-61,29.8l6.4,13.2l61-29.8
// 				c9.8-4.8,21.3,1.4,22.9,12.2l9.4,67.2l14.5-2l-9.4-67.2c-1.5-10.8,7.9-19.9,18.6-18l66.8,11.8L885.3,674.1z"/>
// 			<path id="XMLID_6_" class="st3" d="M795.6,759.5l-8.9-63.3c-0.8-5.6-3.8-10.5-8.5-13.7c-4.6-3.2-10.4-4.3-15.8-3
// 				c-1.5,0.3-2.9,0.9-4.3,1.5l-57.4,28l-2.9-6l57.4-28c5.8-2.8,9.8-8.1,10.9-14.5c1.1-6.4-0.8-12.7-5.3-17.4l-44.4-45.9l4.8-4.6
// 				l44.4,45.9c4.9,5.1,12,7.2,18.9,5.6c5.6-1.3,10.4-5,13.1-10.1l30-56.4l5.9,3.1l-30,56.4c-3,5.7-3.2,12.3-0.3,18.2
// 				c2.8,5.8,8.1,9.8,14.5,10.9l62.9,11.1l-1.2,6.6l-62.9-11.1c-2.7-0.5-5.4-0.4-8,0.2c-10.2,2.3-16.8,11.9-15.3,22.3l8.9,63.3
// 				L795.6,759.5z"/>
// 			<path id="XMLID_193_" class="st6" d="M885.3,674.1l-66.8-11.8c-10.7-1.9-16.5-13.7-11.3-23.3l31.9-59.9l-13-6.9l-31.9,59.9
// 				c-5.1,9.6-18.1,11.4-25.6,3.6L721.4,587l-10.6,10.2l47.2,48.8c7.6,7.8,5.3,20.7-4.5,25.5l-61,29.8l6.4,13.2l61-29.8
// 				c9.8-4.8,21.3,1.4,22.9,12.2l9.4,67.2l14.5-2l-9.4-67.2c-1.5-10.8,7.9-19.9,18.6-18l66.8,11.8L885.3,674.1z"/>
// 			<path id="XMLID_185_" class="st7" d="M769.1,547.2c-64.4,9.1-109.5,68.8-100.4,133.3S737.5,789.9,802,780.9
// 				S911.5,712,902.4,647.6S833.6,538.1,769.1,547.2z M799.5,763c-54.7,7.7-105.3-30.4-112.9-85.1c-7.7-54.7,30.4-105.3,85.1-112.9
// 				c54.7-7.7,105.3,30.4,112.9,85.1C892.3,704.8,854.2,755.4,799.5,763z"/>
// 			<path id="XMLID_177_" class="st10" d="M769.1,547.2c-64.4,9.1-109.5,68.8-100.4,133.3c9.1,64.4,68.8,109.5,133.3,100.4
// 				S911.5,712,902.4,647.6C893.3,583.2,833.6,538.1,769.1,547.2z M894.5,648.7c6.9,49.2-20.2,97.2-66,116.6
// 				c-8.8,3.7-18.1,6.3-27.7,7.7c-29,4.1-58-3.4-81.5-21.1c-23.5-17.7-38.7-43.4-42.8-72.5c-6.9-49.2,20.2-97.2,66-116.6
// 				c8.8-3.7,18.1-6.3,27.7-7.7c29-4.1,58,3.4,81.5,21.1C875.2,593.9,890.4,619.7,894.5,648.7z"/>
// 			<circle id="XMLID_176_" class="st6" cx="785.5" cy="664" r="100"/>
// 			<path id="XMLID_173_" class="st6" d="M769.1,547.2c-64.4,9.1-109.5,68.8-100.4,133.3S737.5,789.9,802,780.9
// 				S911.5,712,902.4,647.6S833.6,538.1,769.1,547.2z M799.5,763c-54.7,7.7-105.3-30.4-112.9-85.1c-7.7-54.7,30.4-105.3,85.1-112.9
// 				c54.7-7.7,105.3,30.4,112.9,85.1C892.3,704.8,854.2,755.4,799.5,763z"/>
// 			<circle id="XMLID_172_" class="st6" cx="785.5" cy="664" r="118"/>
// 			<circle id="XMLID_171_" class="st20" cx="785.5" cy="664" r="118"/>
// 			<path id="XMLID_137_" class="st3" d="M771.6,565c-54.7,7.7-92.8,58.3-85.1,112.9c7.7,54.7,58.3,92.8,112.9,85.1
// 				s92.8-58.3,85.1-112.9C876.9,595.4,826.3,557.3,771.6,565z M877.6,651.1c7.1,50.8-28.4,97.9-79.2,105
// 				c-50.8,7.1-97.9-28.4-105-79.2c-7.1-50.8,28.4-97.9,79.2-105C823.4,564.8,870.5,600.3,877.6,651.1z"/>
// 			<path id="XMLID_130_" class="st6" d="M771.6,565c-54.7,7.7-92.8,58.3-85.1,112.9c7.7,54.7,58.3,92.8,112.9,85.1
// 				s92.8-58.3,85.1-112.9C876.9,595.4,826.3,557.3,771.6,565z M877.6,651.1c7.1,50.8-28.4,97.9-79.2,105
// 				c-50.8,7.1-97.9-28.4-105-79.2c-7.1-50.8,28.4-97.9,79.2-105C823.4,564.8,870.5,600.3,877.6,651.1z"/>
// 			<circle id="XMLID_32_" class="st7" cx="785.5" cy="664" r="17.9"/>
// 			<circle id="XMLID_31_" class="st12" cx="785.5" cy="664" r="17.9"/>
// 			<path id="XMLID_27_" class="st10" d="M797.8,662.3c-2.3-3.6-2.5-8-0.9-11.6c-3.7-3.1-8.6-4.7-13.7-4c-1.3,0.2-2.6,0.5-3.8,1
// 				c0,0.1,0,0.2,0,0.4c0.3,6.6-4.6,12.1-11,12.8c-0.3,1.8-0.4,3.7-0.1,5.6c0.6,4.6,3,8.5,6.3,11.2c0.1-0.1,0.2-0.1,0.3-0.2
// 				c5.5-3.5,12.8-2.1,16.6,3.1c6-2.2,10.4-7.5,11.4-13.7C800.9,665.8,799.1,664.3,797.8,662.3z"/>
// 			<circle id="XMLID_26_" class="st16" cx="785.5" cy="664" r="5.7"/>
// 			<circle id="XMLID_25_" class="st6" cx="785.5" cy="664" r="5.7"/>
// 			<path id="XMLID_24_" class="st12" d="M797.8,662.3c-2.3-3.6-2.5-8-0.9-11.6c-3.7-3.1-8.6-4.7-13.7-4c-1.3,0.2-2.6,0.5-3.8,1
// 				c0,0.1,0,0.2,0,0.4c0.3,6.6-4.6,12.1-11,12.8c-0.3,1.8-0.4,3.7-0.1,5.6c0.6,4.6,3,8.5,6.3,11.2c0.1-0.1,0.2-0.1,0.3-0.2
// 				c5.5-3.5,12.8-2.1,16.6,3.1c6-2.2,10.4-7.5,11.4-13.7C800.9,665.8,799.1,664.3,797.8,662.3z"/>
// 		</g>
// 		<path id="XMLID_135_" class="st27" d="M792.7,554.2c0.8,0.1,1.6,0.1,2.5,0.2c4.4,0.4,8.6,1,12.9,1.9"/>
// 		<path id="XMLID_7_" class="st27" d="M705.9,588.2c15.8-16.6,36.8-28.4,60.6-32.5"/>
// 	</g>
	
// </g>
// </svg>

//   </div>
//   </div>
//   </div>

//   );
// };
