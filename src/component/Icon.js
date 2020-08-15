import React from "react";
import {IconConstants} from "../constant/IconConstant";

const Icon = ({
                 id = "candidate",
                 style = {margin: "auto"},
                 fill = "#000",
                 width = "38px",
                 className = "",
                 viewBox = "0 0 32 32"
             }) => {
    let icon;
    switch (id) {
        case IconConstants.EMAIL.id:

            return (
                <svg xmlns={"http://www.w3.org/2000/svg"} xmlnsXlink={"http://www.w3.org/1999/xlink"} fill={fill}
                     width={width}
                     viewBox={"0 0 512 512"} style={style}>
                    <g>
                        <g>
                            <g>
                                <path d="M486.4,59.733H25.6c-14.138,0-25.6,11.461-25.6,25.6v341.333c0,14.138,11.461,25.6,25.6,25.6h460.8
				c14.138,0,25.6-11.461,25.6-25.6V85.333C512,71.195,500.539,59.733,486.4,59.733z M494.933,426.667
				c0,4.713-3.82,8.533-8.533,8.533H25.6c-4.713,0-8.533-3.82-8.533-8.533V85.333c0-4.713,3.82-8.533,8.533-8.533h460.8
				c4.713,0,8.533,3.82,8.533,8.533V426.667z"/>
                                <path d="M470.076,93.898c-2.255-0.197-4.496,0.51-6.229,1.966L266.982,261.239c-6.349,5.337-15.616,5.337-21.965,0L48.154,95.863
				c-2.335-1.96-5.539-2.526-8.404-1.484c-2.865,1.042-4.957,3.534-5.487,6.537s0.582,6.06,2.917,8.02l196.864,165.367
				c12.688,10.683,31.224,10.683,43.913,0L474.82,108.937c1.734-1.455,2.818-3.539,3.015-5.794c0.197-2.255-0.51-4.496-1.966-6.229
				C474.415,95.179,472.331,94.095,470.076,93.898z"/>
                                <path d="M164.124,273.13c-3.021-0.674-6.169,0.34-8.229,2.65l-119.467,128c-2.162,2.214-2.956,5.426-2.074,8.392
				c0.882,2.967,3.301,5.223,6.321,5.897c3.021,0.674,6.169-0.34,8.229-2.65l119.467-128c2.162-2.214,2.956-5.426,2.074-8.392
				C169.563,276.061,167.145,273.804,164.124,273.13z"/>
                                <path d="M356.105,275.78c-2.059-2.31-5.208-3.324-8.229-2.65c-3.021,0.674-5.439,2.931-6.321,5.897
				c-0.882,2.967-0.088,6.178,2.074,8.392l119.467,128c3.24,3.318,8.536,3.442,11.927,0.278c3.391-3.164,3.635-8.456,0.549-11.918
				L356.105,275.78z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>

                </svg>
            );
        case IconConstants.PHONE_NUMBER.id:
            return (
                <svg xmlns={"http://www.w3.org/2000/svg"} xmlnsXlink={"http://www.w3.org/1999/xlink"} fill={fill}
                     width={width}
                     viewBox={"0 0 512 512"} style={style}>
                    <g>
                        <g>
                            <g>
                                <path d="M384,0H128c-14.138,0-25.6,11.461-25.6,25.6v460.8c0,14.138,11.461,25.6,25.6,25.6h256c14.138,0,25.6-11.461,25.6-25.6
				V25.6C409.6,11.461,398.138,0,384,0z M392.533,68.267H196.267c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h196.267
				v332.8h-25.6c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h25.6v51.2c0,4.713-3.82,8.533-8.533,8.533H128
				c-4.713,0-8.533-3.82-8.533-8.533v-51.2h196.267c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H119.467v-332.8h25.6
				c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533h-25.6V25.6c0-4.713,3.82-8.533,8.533-8.533h256
				c4.713,0,8.533,3.82,8.533,8.533V68.267z"/>
                                <path d="M264.533,460.8h-17.067c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h17.067c4.713,0,8.533-3.82,8.533-8.533
				S269.246,460.8,264.533,460.8z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>
            );
        case IconConstants.FACEBOOK.id:
            return (
                <svg xmlns={"http://www.w3.org/2000/svg"} xmlnsXlink={"http://www.w3.org/1999/xlink"} fill={fill}
                     width={width}
                     viewBox={"0 0 512 512"} style={style}>
                    <g transform="translate(1 1)">
                        <g>
                            <path d="M468.333-1H41.667C17.773-1-1,17.773-1,41.667v426.667C-1,492.227,17.773,511,41.667,511h196.267h102.4h128
			C492.227,511,511,492.227,511,468.333V41.667C511,17.773,492.227-1,468.333-1z M255,493.933V323.267h-68.267V255H255v-59.733
			c0-48.64,37.547-89.6,85.333-93.867h76.8v68.267h-68.267c-14.507,0-25.6,11.093-25.6,25.6V255H408.6v68.267h-85.333v170.667H255z
			 M493.933,468.333c0,14.507-11.093,25.6-25.6,25.6h-128v-153.6h85.333v-102.4h-85.333v-42.667c0-5.12,3.413-8.533,8.533-8.533
			H434.2v-102.4h-94.72c-57.173,5.12-101.547,53.76-101.547,110.933v42.667h-68.267v102.4h68.267v153.6H41.667
			c-14.507,0-25.6-11.093-25.6-25.6V41.667c0-14.507,11.093-25.6,25.6-25.6h426.667c14.507,0,25.6,11.093,25.6,25.6V468.333z"/>
                        </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>
            );
        case IconConstants.LINKEDIN.id:
            return (
                <svg xmlns={"http://www.w3.org/2000/svg"} xmlnsXlink={"http://www.w3.org/1999/xlink"} fill={fill}
                     width={width}
                     viewBox={"0 0 512 512"} style={style}>
                    <g transform="translate(1)">
                        <g>
                            <g>
                                <path d="M68.12,4.267c-18.773,0-35.84,6.827-48.64,19.627C5.827,37.547-1,54.613-1,72.533c0,18.773,7.68,35.84,20.48,48.64
				c12.8,12.8,30.72,20.48,47.787,19.627c0,0,0.853,0,1.707,0c17.067,0,33.28-6.827,46.08-19.627
				c12.8-12.8,20.48-29.867,20.48-48.64c0.853-17.92-6.827-34.987-19.627-47.787C103.107,11.093,86.04,4.267,68.12,4.267z
				 M103.107,109.227c-9.387,9.387-22.187,15.36-35.84,14.507c-12.8,0-26.453-5.12-35.84-14.507
				c-10.24-9.387-15.36-23.04-15.36-36.693s5.12-26.453,15.36-36.693c9.387-9.387,22.187-14.507,36.693-14.507
				c12.8,0,25.6,5.12,34.987,14.507c10.24,10.24,15.36,23.04,15.36,36.693S113.347,99.84,103.107,109.227z"/>
                                <path d="M101.4,157.867H32.28c-13.653,0-24.747,11.093-24.747,25.6v298.667c0,13.653,11.947,25.6,25.6,25.6H101.4
				c13.653,0,25.6-11.947,25.6-24.747v-299.52C127,169.813,115.053,157.867,101.4,157.867z M109.933,482.987
				c0,4.267-4.267,7.68-8.533,7.68H33.133c-4.267,0-8.533-4.267-8.533-8.533V183.467c0-4.267,3.413-8.533,7.68-8.533h69.12
				c4.267,0,8.533,4.267,8.533,8.533V482.987z"/>
                                <path d="M391.533,149.333h-17.92c-33.28,0-64.853,14.507-85.333,37.547v-11.947c0-8.533-8.533-17.067-17.067-17.067H185.88
				c-7.68,0-17.067,6.827-17.067,16.213v318.293c0,9.387,9.387,15.36,17.067,15.36h93.867c7.68,0,17.067-5.973,17.067-15.36v-184.32
				c0-28.16,20.48-50.347,46.933-50.347c13.653,0,26.453,5.12,35.84,14.507c8.533,7.68,11.947,19.627,11.947,34.987v183.467
				c0,8.533,8.533,17.067,17.067,17.067h85.333c8.533,0,17.067-8.533,17.067-17.067v-220.16
				C511,202.24,458.947,149.333,391.533,149.333z M493.933,489.813l-0.853,0.853h-83.627L408.6,307.2
				c0-20.48-5.12-35.84-16.213-46.933c-12.8-12.8-29.867-19.627-47.787-19.627c-35.84,0.853-64,29.867-64,67.413v182.613h-93.867
				V174.933h84.48l0.853,0.853v53.76l23.04-23.04l0.853-0.853c17.067-23.893,46.933-39.253,78.507-39.253h17.92
				c57.173,0,101.547,46.08,101.547,104.107V489.813z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>
            );
        case IconConstants.ADDRESS.id:
            return (
                <svg xmlns={"http://www.w3.org/2000/svg"} xmlnsXlink={"http://www.w3.org/1999/xlink"} fill={fill}
                     width={width}
                     viewBox={"0 0 512 512"} style={style}>
                    <g>
                        <g>
                            <g>
                                <path d="M167.974,351.473c21.086,29.73,42.138,56.32,56.09,73.446c2.031,2.492,3.934,4.804,5.777,7.031h-42.103
				c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533H324.27c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533
				h-42.103c1.843-2.227,3.746-4.54,5.786-7.031c13.943-17.067,34.987-43.716,56.081-73.446
				c20.929-28.905,39.767-59.267,56.371-90.854c17.425-34.219,26.266-62.626,26.266-84.437
				c0.058-45.321-17.926-88.801-49.98-120.841c-2.141-2.22-5.313-3.112-8.297-2.333c-2.984,0.779-5.316,3.107-6.099,6.09
				c-0.783,2.983,0.104,6.156,2.321,8.3c28.852,28.844,45.039,67.985,44.988,108.783c0,19.098-8.209,44.902-24.405,76.689
				c-16.229,30.855-34.64,60.513-55.091,88.747c-20.804,29.346-41.6,55.637-55.381,72.533c-4.582,5.615-8.704,10.581-12.22,14.78
				c-1.641,1.874-4.011,2.948-6.502,2.948c-2.491,0-4.861-1.075-6.502-2.948c-3.516-4.198-7.637-9.165-12.22-14.78
				c-13.781-16.887-34.577-43.179-55.381-72.533c-20.451-28.234-38.862-57.892-55.091-88.747
				c-16.213-31.787-24.405-57.591-24.405-76.689c-0.005-61.809,36.959-117.627,93.867-141.747
				c38.238-16.034,81.314-16.034,119.552,0c2.808,1.19,6.037,0.793,8.472-1.044c2.435-1.836,3.705-4.832,3.332-7.859
				c-0.373-3.027-2.332-5.625-5.14-6.815c-86.898-36.652-187.056,4.062-223.735,90.948c-8.895,21.046-13.457,43.669-13.414,66.517
				c0,21.811,8.841,50.219,26.266,84.48C128.208,292.234,147.047,322.582,167.974,351.473z"/>
                                <path d="M256.003,99.151c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533c-40.71-0.001-75.752,28.757-83.695,68.685
				c-7.943,39.928,13.426,79.906,51.037,95.486c37.611,15.58,80.99,2.421,103.608-31.428
				c22.618-33.849,18.175-78.962-10.611-107.749c-2.143-2.218-5.315-3.108-8.299-2.327c-2.983,0.781-5.313,3.111-6.094,6.094
				c-0.781,2.984,0.109,6.156,2.327,8.299c23.03,23.029,26.585,59.118,8.492,86.198c-18.093,27.08-52.796,37.608-82.885,25.146
				c-30.089-12.462-47.185-44.444-40.833-76.387S223.435,99.152,256.003,99.151z"/>
                                <path d="M508.786,470.957l-52.48-93.867c-4.745-8.34-13.624-13.466-23.219-13.406H372.27c-4.713,0-8.533,3.82-8.533,8.533
				s3.82,8.533,8.533,8.533h60.817c3.416-0.066,6.603,1.715,8.337,4.659l52.463,93.867c1.429,2.442,1.399,5.471-0.077,7.885
				c-1.743,2.88-4.895,4.605-8.26,4.523H26.457c-3.362,0.08-6.51-1.646-8.252-4.523c-1.476-2.414-1.505-5.443-0.077-7.885
				l52.463-93.867c1.731-2.943,4.915-4.724,8.328-4.659h60.817c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H78.92
				c-9.6-0.063-18.486,5.063-23.236,13.406L3.212,470.957c-4.375,7.728-4.274,17.208,0.265,24.841
				c4.782,8.128,13.551,13.071,22.98,12.954H485.55c9.426,0.114,18.192-4.828,22.972-12.954
				C513.061,488.164,513.162,478.685,508.786,470.957z"/>
                                <path d="M418.137,406.351h-34.133c-1.685,0.003-3.332,0.501-4.736,1.434l-25.6,17.067c-3.921,2.616-4.979,7.915-2.364,11.836
				c2.616,3.921,7.915,4.979,11.836,2.364l23.424-15.633h31.573c4.713,0,8.533-3.821,8.533-8.533
				C426.67,410.171,422.85,406.351,418.137,406.351z"/>
                                <path d="M366.937,466.084c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H375.47
				C370.757,457.551,366.937,461.371,366.937,466.084z"/>
                                <path d="M153.603,440.484c3.762,0.005,7.083-2.455,8.176-6.055c1.093-3.6-0.301-7.491-3.431-9.578l-25.6-17.067
				c-1.406-0.934-3.057-1.433-4.745-1.434H93.87c-4.713,0-8.533,3.821-8.533,8.533c0,4.713,3.821,8.533,8.533,8.533h31.573
				l23.45,15.633C150.288,439.981,151.927,440.48,153.603,440.484z"/>
                                <path d="M68.27,457.551c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.82,8.533-8.533
				s-3.82-8.533-8.533-8.533H68.27z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>
            );
        case IconConstants.SKYPE.id:
            return (
                <svg xmlns={"http://www.w3.org/2000/svg"} xmlnsXlink={"http://www.w3.org/1999/xlink"} fill={fill}
                     width={width}
                     viewBox={"0 0 512 512"} style={style}>
                    <g>
                        <g>
                            <path d="M482.626,284.841c1.21-9.583,1.821-19.268,1.821-28.842c0-36.924-9.017-73.607-26.075-106.083
			c-16.508-31.429-40.519-58.995-69.435-79.72c-3.597-2.579-8.607-1.755-11.186,1.846c-2.579,3.599-1.753,8.607,1.846,11.186
			c55.613,39.859,88.817,104.447,88.817,172.773c0,10.027-0.723,20.188-2.146,30.199c-0.331,2.321,0.372,4.67,1.921,6.429
			c17.914,20.331,27.778,46.465,27.778,73.585c0,61.417-49.966,111.382-111.383,111.382c-21.323,0-42.043-6.042-59.918-17.474
			c-1.98-1.266-4.412-1.599-6.657-0.914c-20.04,6.108-40.903,9.204-62.01,9.204c-117.125,0-212.413-95.288-212.413-212.414
			c0-10.032,0.723-20.192,2.146-30.199c0.33-2.321-0.372-4.67-1.922-6.429c-17.913-20.331-27.777-46.465-27.777-73.585
			C16.033,84.368,66,34.403,127.416,34.403c21.323,0,42.043,6.042,59.918,17.474c1.977,1.266,4.409,1.6,6.657,0.914
			c20.041-6.108,40.903-9.204,62.01-9.204c34.437,0,68.628,8.427,98.879,24.369c3.92,2.064,8.766,0.561,10.83-3.354
			c2.065-3.918,0.562-8.766-3.354-10.83c-32.547-17.153-69.323-26.218-106.355-26.218c-21.464,0-42.7,2.981-63.18,8.864
			c-19.724-11.819-42.257-18.048-65.403-18.048C57.159,18.369,0,75.527,0,145.785c0,29.788,10.405,58.537,29.374,81.373
			c-1.209,9.581-1.821,19.264-1.821,28.842c0,61.02,23.763,118.388,66.911,161.537c43.148,43.147,100.516,66.911,161.537,66.911
			c21.464,0,42.7-2.981,63.179-8.864c19.724,11.819,42.257,18.048,65.403,18.048C454.841,493.629,512,436.471,512,366.214
			C512,336.426,501.595,307.678,482.626,284.841z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M318.647,254.431c-16.958-11.969-37.386-19.178-57.14-26.15c-39.166-13.824-53.073-21.404-53.073-36.415
			c0-25.179,25.866-30.463,47.566-30.463c10.911,0,34.633,5.121,43.261,11.432c13.08,9.565,31.509,6.711,41.08-6.372
			c4.636-6.337,6.525-14.1,5.322-21.859s-5.356-14.585-11.693-19.22c-21.475-15.706-58.522-22.771-77.97-22.771
			c-31.297,0-57.764,8.27-76.538,23.915c-19.227,16.023-29.817,39.226-29.817,65.337c0,27.13,11.828,49.235,35.157,65.702
			c9.019,6.366,19.829,11.969,34.019,17.636c4.111,1.642,8.776-0.361,10.417-4.473c1.642-4.113-0.36-8.777-4.473-10.418
			c-12.991-5.187-22.752-10.221-30.717-15.842c-18.824-13.29-28.37-30.986-28.37-52.603c0-21.267,8.54-40.097,24.048-53.02
			c15.857-13.215,38.774-20.199,66.274-20.199c17.44,0,50.949,6.838,68.503,19.678c5.875,4.297,7.199,12.789,2.897,18.671
			c-4.35,5.945-12.726,7.247-18.674,2.897c-12.121-8.867-39.325-14.524-52.726-14.524c-40.418,0-63.599,16.947-63.599,46.497
			c0,27.073,24.092,37.53,63.77,51.535c18.725,6.609,38.088,13.441,53.23,24.129c18.824,13.29,28.37,30.987,28.37,52.603
			c0,43.795-32.861,73.219-81.77,73.219c-33.463,0-70.01-15.179-85.01-35.308c-4.403-5.908-3.178-14.295,2.731-18.698
			c5.843-4.358,14.347-3.106,18.696,2.73c8.836,11.857,36.494,24.554,63.583,24.554c34.47,0,55.048-17.382,55.048-46.497
			c0-26.825-24.116-37.419-60.906-50.52c-4.17-1.484-8.755,0.692-10.242,4.863c-1.486,4.171,0.692,8.755,4.862,10.241
			c39.92,14.215,50.252,21.498,50.252,35.416c0,11.984-4.561,20.219-13.942,25.177c-8.706,4.599-19.445,5.287-25.073,5.287
			c-24.449,0-46.02-11.784-50.728-18.102c-4.691-6.296-11.554-10.387-19.323-11.522c-7.771-1.137-15.516,0.824-21.811,5.517
			c-12.997,9.686-15.69,28.139-6.005,41.134c18.033,24.199,59.192,41.762,97.867,41.762c28.371,0,52.718-8.461,70.411-24.469
			c17.921-16.214,27.393-38.616,27.393-64.784C353.804,293.005,341.975,270.899,318.647,254.431z"/>
                        </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>
            );
    }
}

export default Icon;
