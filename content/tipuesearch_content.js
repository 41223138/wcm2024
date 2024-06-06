var tipuesearch = {"pages": [{'title': '課表', 'text': '\n', 'tags': '', 'url': '課表.html'}, {'title': 'About', 'text': '網頁:\xa0 https://41223138.github.io/wcm2024 \n 網誌:\xa0 https://412231github.io/wcm202438./blog \n 簡報:\xa0 https://41223138.github.io/wcm2024/reveal \n 倉儲:\xa0 https://github.com/41223138/wcm2024 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': '期中重點', 'text': '網頁式內容管理 \n 目前無論是 Github 的 Codespaces, Gitpod 或 Replit 都讓使用者可以直接在網頁瀏覽器中維護網站內容. 其中 Replit 還提供手機 App 讓使用者透過手機或平板管理網頁內容.網際內容管理課程將網頁內容管理系統與網頁資料放在同一個倉儲中, 且讓使用者寄存在 Github 中, 只要能夠執行 Python 的雲端或近端環境都能開啟網頁編輯程式進行改版, 而編輯完成的網頁資料則可在 Github 倉儲中透過 Pages 的全球資訊網伺服器功能呈現網站內容.網際內容管理課程所採用的管理系統採用 Python Flask 編寫, 其中除了章節式的網頁內容採超文件的 H 標註進行分頁外, 還導入 Pelican 與 Reveal.js 等兩個延伸套件, 其中 Pelican 可用來建立網誌, 而 Reveal.js 則可用來建立網頁上的簡報資料. \n Python 程式系統 \n Python 程式系統是指使用 Python 程式語言開發的軟體系統。Python 是一種高級、通用、直譯式的程式語言，具有簡潔易讀的語法和強大的擴展性，廣泛應用於軟體開發、數據分析、科學計算、網站開發等各個領域。可用Python 開發各種程式, 或與其他 Windows 應用套件結合使用, 例如: 與 CoppeliaSim 機器人模擬場景結合, 建立機電控制系統, 或與 Siemens NX 的 API 延伸程式結合應用. \n 網頁上的 IDE \n IDE（整合開發環境）是一種讓開發者可以在瀏覽器中進行程式碼編輯、調試和執行的工具。這樣的IDE通常具有以下特點： \n \n \n 線上編輯器 ：允許在瀏覽器中直接編輯程式碼，並提供語法高亮、自動完成等功能。 \n \n \n 多語言支援 ：能夠編輯和執行多種程式語言，如JavaScript、HTML、CSS、Python等。 \n \n \n 調試功能 ：提供調試工具，如斷點設置、變數監視等，方便開發者進行程式碼調試。 \n \n \n 項目管理 ：允許開發者在線上管理項目，包括文件管理、項目結構視圖等。 \n \n \n 版本控制整合 ：與版本控制系統（如Git）整合，使得開發者能夠方便地管理代碼版本。 \n \n \n 即時預覽 ：能夠即時預覽網頁、應用程式等的運行結果。 \n \n \n 協作功能 ：支援多人協作開發，允許多個開發者同時編輯同一份程式碼，並提供即時通訊功能。 \n \n \n AI 工具 \n \n \n \n \n \n AI工具是指利用機器學習、深度學習、自然語言處理等技術開發的應用程式，用於解決各種問題或執行特定任務。這些工具可以應用於多個領域，包括但不限於自然語言處理、圖像處理、機器學習模型訓練、數據分析等。以下是一些常見的AI工具： \n \n \n \n \n \n Scikit-learn：基於Python的機器學習庫，提供了各種機器學習算法的實現，包括分類、回歸、聚類等。 \n \n \n \n \n \n ChatGPT 是一個基於 OpenAI 的語言模型，具有多種功能，可以幫助用戶進行對話、提供信息、創作文本等。 \n \n \n \n \n \n', 'tags': '', 'url': '期中重點.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Codespaces', 'text': 'https://41223138.github.io/wcm2024 \n \n \n \n \n', 'tags': '', 'url': 'Codespaces.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'W7-W8', 'text': '1. 課程介紹教育的理念本質。 \n 2. 影片嵌入 網站方法。 \n \n \n', 'tags': '', 'url': 'W7-W8.html'}, {'title': 'W6', 'text': 'GitHub 的發展歷史如下： \n GitHub 於 2008 年由 Tom Preston-Werner、Chris Wanstrath 和 PJ Hyett 共同創立。他們希望為開發者社群提供一個方便、易於使用的代碼托管平台。 \n 2008 年 4 月，GitHub 開始運營，提供基於 Git 的代碼托管服務。它快速吸引了許多開發者和開源項目，成為了開源社區的中心之一。 \n 隨著時間的推移，GitHub 提供了越來越多的功能，包括問題跟踪、代碼審查、Wiki 等，使其成為開發團隊協作的理想選擇。 \n 2018 年，Microsoft 宣布收購 GitHub，但 GitHub 仍然保持獨立運營，並致力於為開發者社群提供更好的服務。 \n GitHub 的成功不僅在於它提供了優秀的技術平台，還在於它建立了一個強大的開發者社群，促進了開源文化的發展和分享知識的精神。 \n \n \n \n \n \n \n \n github創作人的相關履歷: \n \n GitHub 的創始人之一是 Tom Preston-Werner。他在 2008 年共同創立了 GitHub，是這個平台的主要推動者之一。以下是 Tom Preston-Werner 的相關履歷： \n Tom Preston-Werner 在程序員社群中享有很高的聲譽。他以開放源碼項目為主，是 Ruby 社群中知名的成員之一。 \n 他曾是 GitHub 的首席技術官（CTO），負責制定技術方針和平台架構。他對於 GitHub 平台的成功和技術發展貢獻良多。 \n 在創立 GitHub 之前，Tom Preston-Werner 還參與過多個開源項目的開發和維護工作，他的開源貢獻為他贏得了廣泛的尊重和讚譽。 \n 雖然 Tom Preston-Werner 在 2014 年離開了 GitHub，但他的貢獻對於 GitHub 和開發者社群的發展影響深遠。 \n \n \n \n \n \n \n \n \n \n \n \n \n \n 一般同一專業領域的人士可以利用 Git 解決內容管理問題的方式包括： \n \n \n 版本控制 ：使用 Git 跟踪文件的每一次變化，能夠輕鬆地比較不同版本之間的差異，從而更好地管理和維護專案的內容。 \n \n \n 協作開發 ：多人協作開發時，可以利用 Git 的分支（branch）功能讓不同的團隊成員同時進行獨立的工作，最後再將各自的修改合併（merge）到主分支，從而實現高效率的協作開發。 \n \n \n 版本回溯 ：當出現錯誤或需要回復到之前的某個版本時，可以利用 Git 輕鬆地回溯到過去的任何一個提交點，進行修復或恢復。 \n \n \n 代碼審查 ：通過 Git 提交的每一個變更都可以進行代碼審查，有助於發現潛在的問題並提出改進建議，從而提高代碼的質量和穩定性。 \n \n \n 分支管理 ：利用 Git 可以方便地管理不同的功能分支、bug 修復分支等，從而更好地組織和規劃專案的開發進度。 \n \n \n 遠程協作 ：通過將專案代碼托管到遠程 Git 服務（如 GitHub、GitLab、Bitbucket 等），可以實現跨地區或跨團隊的協作開發，並提供安全的備份和存儲。 \n \n \n 總的來說，Git 提供了豐富的功能和工具，能夠有效地解決內容管理問題，提高團隊協作效率，並確保專案的可追溯性和穩定性。 \n \n \n \n \n \n \n \n \n \n \n \n \n 在 Windows 上進行 Git 客戶端（client）和 Git 服務器（server）的實際演示，可以按照以下步驟進行： \n', 'tags': '', 'url': 'W6.html'}, {'title': '設置 Git 服務器：', 'text': '\n \n 安裝 Git ：首先在適當的位置下載並安裝 Git，你可以從  Git 官方網站  下載 Windows 版本的 Git 安裝程式。 \n \n \n 初始化 Git 儲存庫 ：在你希望作為 Git 服務器的文件夾中初始化一個空的 Git 儲存庫。你可以使用命令行或 Git 圖形用戶界面（GUI）工具來執行這一步驟。 \n \n git init --bare myrepo.git  \n \n \n \n 啟動 Git 服務器 ：使用 Git 命令啟動 Git 服務器。 \n \n git daemon --reuseaddr --base-path=. --export-all --verbose -- enable =receive-pack  \n \n \n \n', 'tags': '', 'url': '設置 Git 服務器：.html'}, {'title': '設置 Git 客戶端：', 'text': '\n \n 安裝 Git ：在你的 Windows 機器上安裝 Git，可以使用與上述相同的安裝程式。 \n \n \n 克隆儲存庫 ：使用 Git 客戶端，克隆剛剛初始化的 Git 儲存庫到你的本地計算機上。 \n \n git  clone  git://your-server-ip/myrepo.git  \n \n \n \n', 'tags': '', 'url': '設置 Git 客戶端：.html'}, {'title': '進行演示：', 'text': '\n \n 在 Git 客戶端進行一些更改，例如添加新文件、修改現有文件等。 \n \n \n 使用 Git 客戶端將這些更改提交到本地儲存庫。 \n \n git add . git commit -m  "Commit message"   \n \n \n \n 將本地更改推送（push）到 Git 服務器。 \n \n git push origin master  \n \n \n \n 在 Git 服務器端，可以使用 Git 工具或任何文字編輯器檢查提交的更改。 \n \n \n 這樣就完成了在 Windows 上進行 Git 客戶端和 Git 服務器的實際演示。這個過程可以讓你了解 Git 在團隊協作中的基本運作方式。 \n', 'tags': '', 'url': '進行演示：.html'}, {'title': 'W5', 'text': '1.Replit分組平台倉儲設定。 \n 2.使用 可攜檔 裡的 Putty-solvespace.exe ( STL )，零件檢視方法。 \n 3.使用近端可攜程式，維護更新自己及分組倉儲。 \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W4', 'text': '1.複習W3上課內容。 \n 2.Replit 靜態網站檢視下載 \xa0 main2.txt \xa0 與 \xa0 static.txt , 其中包含 main2.py 與 static.py 若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵. \n 3. 使用replit Codespaces Gitpod三種網頁維護 執行動態和靜態網站和設定存取權。 \n 4.使用Replit 建立分組倉儲權限, 由於 Replit 上的免費帳號僅允許與一個 Github 帳號對應,必須自行在 /home/runner/.ssh 目錄下建立 id_rsa 與 config(.ssh-keygen) \n 5.下載 miktex-portable.7z ，期中期末需要 LaTeX 建立各組的報告 \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W3', 'text': '1.常用的 git 指令 \n 2. 利用 Gitpod 維護倉儲 \n 3. 利用 localhost 維護倉儲 \n 4.利用 Wink 建立操作影片 \n \n \n \n \n \n \n \n Ch \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W3.html'}, {'title': 'Brython', 'text': "https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n \n \n \n \n \n Filename:  .py   \n \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n", 'tags': '', 'url': 'Brython.html'}]};