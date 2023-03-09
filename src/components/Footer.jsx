import React from 'react';

function Footer() {
  return (
    <footer
      className="flex flex-col"
      style={{ backgroundColor: 'rgb(15, 25, 38)' }}
    >
      <div className="py-5">
        <div className="flex justify-center items-center py-[10px] px-[55px]">
          <div
            className="pr-5 mr-5"
            style={{ borderRight: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <svg width={30} viewBox="0 0 40 40">
              <g fill="none" fillRule="evenodd">
                <path d="M.001 25.482c0-4.502-.003-9.004.001-13.506C.006 8.64 1.187 5.779 3.55 3.429 5.397 1.592 7.634.502 10.217.126c.617-.09 1.237-.118 1.86-.117h6.385C21.724.007 24.985 0 28.246 0c3.832 0 7.663.004 11.495.006.255 0 .256 0 .256.265v11.013c-.002 5.666.016 11.333-.015 17-.026 4.648-2.84 8.852-7.102 10.716-1.53.67-3.132 1-4.803 1-5.188-.002-10.375 0-15.562 0l-12.24-.002c-.274 0-.274 0-.274-.264V29.467v-3.985"></path>
                <path
                  d="M19.841 22.925c.022-1.349-1.086-2.483-2.445-2.503-1.387-.02-2.512 1.053-2.54 2.423-.027 1.369 1.06 2.52 2.401 2.542 1.43.024 2.561-1.054 2.584-2.462m3.377-9.856a3.938 3.938 0 10-.016 7.876c2.178.004 3.954-1.758 3.96-3.929.005-2.17-1.767-3.944-3.944-3.947m8.532 1.485c3.328-.003 6.025-2.693 6.024-6.007 0-3.313-2.704-6.01-6.025-6.013-3.33-.002-6.04 2.703-6.033 6.024.006 3.317 2.706 6 6.034 5.996M5.597 37.482h.238l2.633-.002 20.965-.03c.078 0 .16.001.234-.018.975-.255 1.938-.547 2.835-1.015 1.727-.903 3.098-2.18 4-3.919.742-1.434 1.064-2.981 1.163-4.584.01-.184-.034-.222-.212-.222-7.323.005-14.645.005-21.968.002a.412.412 0 00-.325.133c-1.997 2.021-3.997 4.04-5.997 6.057l-3.566 3.598m-2.993-2.62l.042.027c.07-.076.138-.154.21-.227 3.116-3.143 6.23-6.287 9.35-9.427a.507.507 0 00.16-.394c-.003-7.335-.003-14.67-.003-22.007 0-.045-.002-.091 0-.137.006-.085-.026-.11-.114-.104-.862.065-1.72.146-2.56.37-1.23.329-2.39.806-3.398 1.601-1.753 1.382-2.868 3.18-3.447 5.32-.081.301-.207.592-.207.913L2.604 34.67v.194M0 25.483c0-4.503-.003-9.005.001-13.507C.006 8.64 1.187 5.779 3.55 3.429 5.397 1.592 7.634.502 10.217.126c.617-.09 1.237-.118 1.86-.117h6.385C21.724.007 24.985 0 28.246 0c3.832 0 7.663.004 11.495.006.255 0 .256 0 .256.265v11.013c-.002 5.666.016 11.333-.015 17-.026 4.648-2.84 8.852-7.102 10.716-1.53.67-3.132 1-4.803 1-5.188-.002-10.375 0-15.562 0l-12.24-.002c-.274 0-.274 0-.274-.264V29.467v-3.985"
                  fill="#FFF"
                ></path>
              </g>
            </svg>
          </div>
          <div
            className=""
            style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '11px' }}
          >
            このエルマークは、レコード会社・映像製作会社が提供するコンテンツを示す登録商標です。RIAJ70024001
          </div>
        </div>
        <div
          className="flex justify-center items-center py-[10px] px-[55px]"
          style={{ backgroundColor: 'rgb(15, 25, 38)' }}
        >
          <div
            className="pr-5 mr-5"
            style={{ borderRight: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <svg width={30} viewBox="0 0 40 33">
              <path
                d="M29.806 29.467c.168.425.224.89.331 1.336l-.074.016c.001.482-.045.958-.284 1.396-.222.408-.567.648-1.072.642-.5-.005-.824-.262-1.022-.667a2.642 2.642 0 01-.21-.623 3.56 3.56 0 01.085-1.806c.108-.342.3-.637.64-.826.592-.33 1.353-.104 1.606.532zm-7.701-.453c.408.312.53.755.593 1.213.03.225.032.452.042.604-.031.555-.073 1.032-.346 1.46-.238.375-.588.573-1.068.566-.466-.007-.78-.235-.995-.592-.291-.485-.36-1.021-.32-1.556.03-.399.106-.812.265-1.18.314-.727 1.235-.969 1.829-.515zm10.29-.229c.478.02.83.263.979.68.151.424.22.876.325 1.313-.105.464-.168.91-.312 1.33-.151.44-.502.714-1.013.746-.515.033-.897-.195-1.092-.629-.43-.958-.45-1.929.053-2.872.21-.396.59-.588 1.06-.568zm-7.131 0c.484.015.895.296 1.06.806.125.384.17.79.251 1.185-.057.558-.098 1.102-.435 1.576-.496.7-1.513.666-1.965-.06-.257-.413-.322-.873-.337-1.336-.015-.488.03-.974.25-1.43.236-.493.657-.757 1.176-.741zm-18.078 0c.545.02.861.336 1.04.786.082.203.13.421.167.637.032.191.028.389.04.584l.06.014c-.099.433-.16.878-.307 1.297-.16.46-.528.737-1.065.753-.546.017-.903-.264-1.092-.714a3.257 3.257 0 01.007-2.638c.2-.464.59-.74 1.15-.719zm11.703.389c.195.355.279.786.29 1.593-.015.477-.048 1.056-.398 1.561-.507.732-1.526.698-1.986-.063-.315-.52-.368-1.1-.355-1.68.012-.517.076-1.035.375-1.49.533-.81 1.608-.768 2.074.079zm-4.622-.39c.545 0 .902.293 1.06.752.14.404.193.834.29 1.278-.1.435-.161.88-.312 1.298-.164.455-.526.737-1.07.745-.547.008-.902-.272-1.088-.722a3.286 3.286 0 01.004-2.618c.194-.46.57-.734 1.116-.733zm-3.502.002c.457.022.768.256.964.637.24.468.27.97.326 1.49-.101.408-.165.83-.313 1.222-.165.438-.523.697-1.038.72-.501.024-.87-.209-1.056-.614-.441-.962-.463-1.943.05-2.894.21-.393.592-.584 1.067-.561zm-.063.345c-.277-.015-.546.2-.698.57-.201.49-.235 1.004-.161 1.516.046.317.125.646.27.932.241.472.827.475 1.115.027.093-.143.165-.308.2-.472.063-.294.09-.594.14-.943-.055-.31-.095-.667-.187-1.011-.104-.387-.37-.603-.68-.62zm10.691.016a.645.645 0 00-.636.443c-.142.396-.226.809-.333 1.207.103.43.174.828.298 1.213.089.278.299.49.652.49.35 0 .558-.208.664-.481a3.25 3.25 0 00.007-2.408c-.102-.266-.317-.462-.652-.464zm7.363-.003c-.318-.004-.515.195-.626.443-.361.809-.338 1.631-.022 2.446.102.264.299.467.631.467.344 0 .555-.208.643-.484.123-.384.189-.785.281-1.19-.09-.415-.155-.825-.276-1.218a.637.637 0 00-.631-.464zm-15.005.235c-.074.088-.14.19-.18.294-.29.774-.28 1.55.007 2.32.106.286.3.51.654.507.352-.004.562-.229.65-.514.117-.38.175-.774.259-1.163l-.041-.01c-.02-.228-.007-.463-.066-.68-.071-.263-.158-.541-.318-.76-.253-.344-.687-.324-.965.006zm18.568-.245c-.302.002-.499.187-.606.43-.366.827-.35 1.666-.017 2.498.102.254.306.443.624.436a.626.626 0 00.613-.448c.127-.401.201-.816.302-1.242-.097-.42-.166-.836-.296-1.236a.619.619 0 00-.62-.438zm-25.168.002c-.34-.018-.547.191-.661.459-.345.81-.335 1.632-.01 2.446.106.265.303.465.633.457.336-.008.55-.209.637-.49.118-.385.185-.785.273-1.176-.084-.412-.142-.806-.25-1.187-.08-.28-.288-.491-.622-.509zm18.057 0c-.31-.004-.51.176-.622.416-.38.814-.364 1.642-.041 2.467.103.265.295.47.63.473.36.003.575-.212.664-.499.12-.386.185-.787.26-1.124-.064-.401-.113-.73-.172-1.058a.811.811 0 00-.1-.25c-.132-.233-.31-.423-.619-.426zm-7.358-.242c-.348-.011-.56.212-.676.498-.346.854-.334 1.719-.01 2.576.106.283.305.496.644.497.35.002.576-.21.666-.506.127-.417.196-.852.287-1.27-.086-.435-.145-.845-.254-1.241-.085-.31-.3-.543-.657-.554zM10.486 7.907c.163 0 .235.05.29.204.536 1.527 1.082 3.05 1.625 4.576l3.21 9.03c.204.578.408 1.157.624 1.764-.114.008-.194.017-.274.017-1 0-1.998-.006-2.997.004-.188.001-.262-.06-.317-.234-.273-.868-.562-1.732-.846-2.597-.01-.03-.024-.058-.041-.095l-.03-.063-2.874 2.982-1.934-2.105-.977-1.065-.965 2.7-.483 1.35h16.54l16.152-.004c.222 0 .366.058.509.237.492.615.991 1.224 1.498 1.841l.768.935H0l.56-1.569.278-.776 5.68-15.803c.134-.373.275-.743.4-1.119.05-.152.129-.21.292-.209 1.092.006 2.184.006 3.276 0zm6.484-.032c2.525.006 5.05 0 7.575.006.812.002 1.612.108 2.373.403 1.23.476 1.948 1.355 2.132 2.65a7.115 7.115 0 01-.047 2.369c-.153.797-.449 1.51-1.163 1.95.348.321.708.604 1.005.94.463.526.598 1.192.685 1.86.104.804.08 1.605-.149 2.388-.49 1.673-1.793 2.716-3.574 2.86-.406.033-.814.049-1.221.05l-3.788.002h-4.08v-.256c0-4.99 0-9.98-.006-14.969 0-.2.059-.254.258-.253zm22.698-4.05c.24 0 .312.055.312.302-.007 4.785-.003 9.57-.004 14.354 0 .775-.105 1.536-.374 2.266-.466 1.263-1.388 2.035-2.683 2.366-1.286.33-2.58.286-3.855-.063-1.131-.31-1.87-1.052-2.295-2.127-.44-1.11-.572-2.263-.578-3.453l.002-.359h3.043c.038.535.059 1.068.118 1.596.039.347.113.693.206 1.03.16.573.571.873 1.159.926.25.023.506.022.755-.006.569-.064.987-.439 1.115-1.015.07-.316.113-.644.114-.967l.005-5.797V6.83h-.423c-10.83 0-21.661-.001-32.492.002-.157 0-.262-.038-.365-.165-.714-.88-1.438-1.751-2.158-2.626-.03-.038-.058-.078-.103-.14l-.05-.07h32l6.551-.005zM24.18 10.792l-.156.002c-.356.02-.713.023-1.07.026-.986.01-1.972.015-2.958.028-.137.001-.275.032-.485.06.19.167.34.272.456.405.736.84.949 1.83.833 2.905-.045.415-.196.801-.491 1.11-.142.148-.322.26-.497.397.895.574 1.022 1.446.941 2.371-.08.923-.407 1.75-1.182 2.37.13.044.235.063.34.062 1.384-.02 2.769-.05 4.154-.061.49-.004.875-.189 1.165-.564.573-.741.77-1.59.698-2.505-.043-.53-.2-1.027-.623-1.387-.182-.155-.41-.256-.624-.385.01-.016.013-.026.02-.03.021-.012.043-.025.067-.032.607-.17.97-.58 1.122-1.16.287-1.099.057-2.11-.612-3.02-.241-.328-.559-.528-.948-.58l-.15-.012zm-15.345.737c-.043.044-.06.054-.065.068-.617 1.863-1.232 3.727-1.855 5.589-.048.144-.013.232.082.334.426.457.845.92 1.268 1.379.209.228.42.454.641.694.603-.627 1.178-1.231 1.761-1.828.108-.11.133-.2.083-.352-.377-1.135-.742-2.275-1.11-3.412l-.805-2.472zM35.069.815l.285.19a.56.56 0 01.675-.12c.257.125.364.372.396.647.018.155.019.318-.005.472-.082.54-.585.877-1.137.397 0 .266.005.493-.005.718a.095.095 0 01-.018.047l-.076.093c-.038-.04-.11-.08-.11-.12-.003-.3-.004-.599-.005-.903V.815zm-26.18 0c.297-.002.543.21.64.563.033.123.044.254.06.35-.026.4-.088.75-.438.92-.358.175-.767-.001-.873-.413a2.168 2.168 0 01-.033-.836c.054-.367.333-.583.643-.584zm17.583.608c-.11-.077-.197-.112-.244-.176-.147-.197-.343-.21-.55-.143-.069.022-.148.113-.156.18-.008.067.05.177.112.207.15.074.318.115.48.163.332.099.474.258.46.523-.015.281-.178.447-.51.516-.45.094-.77-.106-.859-.621.126.078.222.108.267.172.149.21.49.293.713.156.18-.111.176-.342-.026-.44-.15-.073-.323-.103-.485-.153-.32-.098-.446-.253-.427-.517.019-.25.19-.409.499-.462.408-.07.714.145.726.595zM11.232.994c-.007.504.005 1.008-.009 1.512-.002.07-.107.14-.164.21l-.05-.034-.05-.033V.84c.177-.051.277-.041.274.153zM29.2 1.21c.143.329.151.67.038 1.01-.104.312-.327.493-.595.495-.26.003-.504-.182-.6-.485-.052-.16-.066-.336-.097-.505.035-.468.213-.78.519-.878.311-.1.592.035.735.363zm-14.616-.063c.079.158.114.341.168.557l.044.168h-1.132c-.003.285.07.486.298.564.208.07.39.027.512-.203.033-.061.12-.088.215-.154-.036.37-.171.542-.43.616a.61.61 0 01-.657-.25c-.245-.36-.233-1.023.026-1.372.273-.368.747-.343.956.074zm6.62.032c.214.353.214.728.047 1.096a.743.743 0 01-.719.438c-.33-.03-.573-.189-.684-.486-.055-.145-.073-.3-.121-.51.062-.169.1-.4.223-.58.303-.45.973-.422 1.254.042zM3.734.815l.08.05c0 .368-.002.735 0 1.102.001.343.104.48.36.488.267.008.477-.17.496-.46.02-.316 0-.633.017-.949.004-.07.084-.135.128-.202.038.066.108.131.11.198.009.457.01.914-.002 1.37-.002.085-.071.169-.11.253l-.15-.182c-.14.07-.281.177-.44.215-.347.082-.622-.129-.645-.504A13.135 13.135 0 013.574.983c.002-.058.104-.112.16-.168zm18.815 0c.296-.015.56.22.652.593.027.107.035.22.052.33l.035.018c-.067.217-.112.446-.205.647-.11.236-.326.328-.554.31-.268-.02-.49-.179-.554-.475a2.479 2.479 0 01-.043-.788c.044-.376.31-.618.617-.635zm11.292 0c.366-.001.531.167.535.548l-.002.537c0 .09.003.179.008.268.007.104.077.202.111.306.017.051.04.124.02.16-.024.04-.11.084-.142.067-.087-.044-.162-.118-.243-.182-.122.054-.264.141-.416.181-.238.063-.457-.076-.53-.304-.083-.258.002-.543.22-.645.155-.072.327-.106.494-.142.152-.033.271-.085.254-.28-.017-.198-.14-.255-.307-.258-.177-.004-.318.04-.398.233-.024.056-.115.08-.208.138.015-.428.23-.627.604-.627zm.29.943c-.183.043-.352.075-.516.122-.166.048-.247.174-.218.352.03.193.167.238.331.228.325-.02.459-.24.404-.702zm-11.558-.684c-.21-.003-.348.13-.394.335a1.706 1.706 0 00-.03.582c.042.327.208.482.437.47.224-.014.376-.197.418-.508.008-.06.01-.12.018-.222-.013-.08-.023-.202-.057-.314-.062-.204-.182-.34-.392-.343zm6.062-.008c-.26 0-.439.266-.45.672-.011.418.18.722.452.72.27-.002.447-.277.448-.698.001-.42-.176-.693-.45-.694zM8.89 1.072c-.238 0-.375.157-.422.384a1.55 1.55 0 00-.019.533c.049.319.224.479.456.468.223-.01.388-.204.43-.507.008-.06.01-.12.016-.217-.012-.076-.018-.19-.05-.294-.066-.208-.182-.368-.411-.367zm11.672.003a.479.479 0 00-.491.407 1.67 1.67 0 00.015.61c.043.205.198.347.441.364.262.018.41-.131.5-.333.045-.101.052-.217.078-.33-.02-.11-.026-.224-.06-.329-.074-.219-.207-.386-.483-.389zM12.867.816c-.06.131-.084.235-.15.314-.212.26-.43.515-.663.787l-.237.278h1.022c.08.18.038.254-.174.249-.305-.008-.61.003-.914-.004-.084-.002-.228-.024-.237-.058a.29.29 0 01.056-.237c.235-.29.486-.57.731-.855l.133-.157.06-.07h-.902l-.07-.082c.057-.055.112-.155.172-.157.367-.015.735-.008 1.173-.008zM16.327 0c.037.05.106.1.106.15.007.734.005 1.469.005 2.204l-.061.065-.204-.16c-.466.402-1.04.123-1.098-.58a1.642 1.642 0 01.035-.52c.136-.548.578-.683 1.115-.314 0-.247-.006-.467.005-.686.003-.054.063-.106.097-.159zm7.349 0c.045.066.129.131.13.199.014.395.007.791.007 1.209.412-.202.517-.724 1.115-.747-.192.19-.32.342-.474.467-.165.134-.157.251-.045.414.186.27.35.556.521.836.004.005-.002.016-.005.035-.164.067-.275.026-.364-.13-.145-.253-.306-.497-.466-.753-.211.116-.312.256-.284.47a.824.824 0 01-.006.279c-.013.058-.074.106-.114.159-.042-.05-.115-.098-.12-.152-.016-.169-.007-.34-.006-.51 0-.527-.004-1.055.005-1.582.001-.065.069-.13.106-.194zm15.939.567c.232.061.351.218.363.423.026.436.023.874.02 1.31 0 .049-.076.096-.117.144-.04-.056-.114-.11-.116-.168-.012-.33-.007-.66-.008-.99-.002-.33-.103-.473-.343-.486a.468.468 0 00-.516.452c-.026.32-.007.642-.025.963-.004.078-.071.152-.11.229-.043-.08-.123-.157-.125-.237-.011-.455-.01-.91.001-1.365.002-.085.07-.168.108-.252l.179.206c.188-.193.4-.305.689-.229zM2.332 0c.172 0 .188.113.226.223l.727 2.123c.005.015 0 .033 0 .07-.169.062-.258.025-.315-.148-.187-.563-.194-.55-.797-.562-.232-.004-.372.05-.41.292-.014.091-.063.177-.085.267-.037.155-.12.216-.308.145.025-.085.047-.17.075-.254.22-.643.44-1.287.663-1.93C2.146.12 2.16 0 2.332 0zm3.26.272c.037.051.095.1.105.156.017.1.005.206.005.303.317.065.317.065.289.267l-.123.01-.163.018c0 .347-.016.693.012 1.035.006.073.167.135.31.243-.03.029-.083.13-.147.136-.192.018-.384-.021-.398-.249a6.938 6.938 0 01-.009-.468V1.033l-.247-.04C5.221.948 5.192.882 5.214.861c.057-.055.137-.09.26-.164 0-.057-.013-.169.005-.277.009-.053.074-.1.113-.148zm13.35-.248c.387.05.541.58.3.926-.042.061-.095.114-.107.128.112.197.252.356.297.54.098.4-.17.759-.569.817l-.1.008h-.955V.015c.387 0 .766-.038 1.134.01zm-8.257.52v.33c-.493.178-.58.301-.581.82 0 .198.01.396-.005.593-.003.054-.077.105-.118.157-.039-.054-.11-.107-.11-.161-.01-.472-.01-.944-.002-1.416 0-.069.061-.136.094-.204.042.066.085.132.124.2.013.02.013.047.017.062l.581-.382zM6.551.17c-.007.218-.002.436-.002.697.121-.078.19-.132.266-.17.374-.186.79-.017.83.37.041.413.023.833.019 1.25 0 .042-.083.083-.127.125-.038-.049-.108-.096-.11-.145-.01-.316-.003-.63-.003-.946 0-.334-.097-.464-.356-.475-.27-.012-.48.155-.503.44-.024.305-.005.613-.022.92-.004.07-.08.138-.122.207-.04-.07-.113-.14-.114-.212-.009-.707-.005-1.414-.004-2.121 0-.025.01-.05.017-.09.172-.054.236-.003.23.15zM32.567 0c.013.03.03.053.03.075.002.593.012 1.186 0 1.778-.008.385-.248.614-.576.589-.323-.025-.534-.292-.513-.664.004-.056.061-.108.094-.161.044.048.103.09.13.148.05.109.052.264.126.332.07.066.235.098.309.05a.477.477 0 00.19-.325c.015-.277.014-.555.012-.834l-.001-.417V.014l.2-.014zm5.366 1.046c.008.243-.003.487.007.73.006.16-.075.352.127.46.019.01.022.112-.001.14-.032.038-.11.08-.144.064-.087-.042-.16-.116-.192-.141-.25.05-.457.125-.663.123-.21-.002-.329-.17-.35-.398-.022-.245.029-.46.265-.556.159-.064.34-.069.495-.14.093-.042.205-.152.22-.247.025-.167-.094-.264-.258-.276-.182-.014-.339.013-.434.213-.03.062-.111.096-.199.167-.02-.41.183-.62.544-.64.362-.02.57.155.583.501zM30.388.041v2.382H29.6V.041h.787zm5.01 1.207c-.158.235-.178.719-.005.945a.563.563 0 00.334.2c.292.043.469-.205.5-.633-.032-.145-.044-.297-.1-.431a.415.415 0 00-.729-.081zM15.738.857c-.21.006-.336.126-.383.322a1.73 1.73 0 00-.049.469c.015.335.2.544.456.546.252.002.416-.18.46-.516.007-.05.007-.1.014-.198-.016-.077-.029-.204-.07-.32-.07-.198-.21-.31-.428-.303zm21.943.637c-.189.044-.379.051-.531.136a.437.437 0 00-.183.336c.004.081.167.205.27.218.346.044.511-.214.444-.69zm-19.336-.183l-.27.004v.86c.272 0 .516.018.756-.005.235-.022.347-.195.356-.426.01-.22-.081-.401-.311-.423a4.53 4.53 0 00-.53-.01zm-4.27-.24c-.206.003-.34.143-.386.41l-.013.106h.82c-.042-.352-.182-.518-.42-.515zM2.302.347l-.227.717-.118.372h.744L2.36.35 2.302.346zM18.318.247l-.242.004v.771c.236 0 .46.01.685-.002.218-.012.33-.146.334-.37.003-.217-.092-.374-.31-.394a4.085 4.085 0 00-.467-.009zM11.142 0c.033.042.094.086.09.126-.003.05-.06.097-.094.146l-.18-.144.184-.128z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <div
            className=""
            style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '11px' }}
          >
            ＡＢＪマークは、この電子書店・電子書籍配信サービスが、著作権者からコンテンツ使用許諾を得た正規版配信サービスであることを示す登録商標（登録番号第６０９１７１３号）です。詳しくは［ABJマーク］または［電子出版制作・流通協議会］で検索してください。
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center pt-[40px] pb-[80px] relative"
        style={{ backgroundColor: 'rgba(1, 6, 13, 0.3)' }}
      >
        <svg aria-labelledby="title" width={127} viewBox="0 0 180 34">
          <path
            d="M121.13 13.393a.7.7 0 00-.699.7v3.847a.7.7 0 00.7.699h7.343a.7.7 0 00.7-.7v-3.846a.7.7 0 00-.7-.7h-7.343zm35.556-11.89h-5.161c-.407 0-.777.236-.95.607l-4.089 8.76-4.089-8.76a1.047 1.047 0 00-.95-.606h-5.161a.7.7 0 00-.617 1.028l7.285 13.659-7.285 13.659a.7.7 0 00.617 1.028h5.16c.408 0 .78-.235.951-.606l4.089-8.761 4.089 8.761c.173.37.543.606.95.606h5.161a.699.699 0 00.616-1.028l-7.285-13.659 7.285-13.659a.699.699 0 00-.616-1.028zm-27.162 0h-16.087c-.579 0-1.049.47-1.049 1.05v27.276c0 .58.47 1.05 1.05 1.05h16.086a.7.7 0 00.699-.7v-3.847a.7.7 0 00-.7-.699h-10.84V6.749h10.84a.7.7 0 00.7-.7V2.204a.7.7 0 00-.7-.7zm49.777 0h-18.185a.7.7 0 00-.7.7V6.05a.7.7 0 00.7.699h5.945v23.43a.7.7 0 00.7.7h4.895a.7.7 0 00.7-.7V6.75h5.945a.7.7 0 00.699-.7V2.204a.7.7 0 00-.7-.7zm-74.027 0h-4.196c-.387 0-.7.313-.7.7v17.999L92.03 2.31a1.398 1.398 0 00-1.267-.807H86.39c-.772 0-1.398.626-1.398 1.398V30.18a.7.7 0 00.7.7h4.196a.7.7 0 00.699-.7v-18l8.349 17.893a1.4 1.4 0 001.268.806h4.37a1.4 1.4 0 001.4-1.399V2.203c0-.387-.313-.7-.7-.7zm-80.2 17.648c0 6.155-4.989 11.145-11.144 11.145-6.154 0-11.144-4.99-11.144-11.145v-13.2c0-.577.439-1.052 1.001-1.109l20.06-2.006a1.115 1.115 0 011.228 1.109v15.206zM24.518 0c-.112 0-.223.006-.333.017L3.01 2.134A3.343 3.343 0 000 5.461v13.69c0 7.694 6.237 13.93 13.93 13.93 7.694 0 13.93-6.236 13.93-13.93V3.343A3.343 3.343 0 0024.518 0zM63.18 1.504h-4.896c-.387 0-.7.312-.7.699v18.884c0 3.013-1.414 4.546-4.195 4.546-2.781 0-4.197-1.533-4.197-4.546V2.203a.7.7 0 00-.7-.7h-4.895a.7.7 0 00-.7.7v18.884c0 6.953 3.538 10.49 10.492 10.49 6.953 0 10.49-3.537 10.49-10.49V2.203c0-.387-.312-.7-.699-.7zM19.78 7.01c-.037 0-.075.001-.111.005L7.97 8.185a1.114 1.114 0 00-1.005 1.11v9.856a6.965 6.965 0 1013.93 0V8.124c0-.615-.498-1.114-1.114-1.114zm58.327 6.383h-7.343a.7.7 0 00-.7.7v3.847a.7.7 0 00.7.699h7.343a.7.7 0 00.7-.7v-3.846a.7.7 0 00-.7-.7z"
            fill="#FFF"
            fillRule="evenodd"
          ></path>
        </svg>
        <div
          className="absolute bottom-8 w-full underline flex justify-center gap-6"
          style={{ fontSize: 15, color: 'rgba(255, 255, 255, 0.5)' }}
        >
          <a
            href="https://careers.unext.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            U-NEXT Careers
          </a>
          <a
            href="https://unext.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            コーポレート
          </a>
        </div>
      </div>
      <div className=" bg-main-bg w-full h-6" />
    </footer>
  );
}

export default Footer;
