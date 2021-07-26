//                            JQuery Crash Course...!


// What You Should Already Know:

// Before you Start Studying JQuery, You Should have a Basic Knowledge Of:

// 1: HTML.
// 2: CSS.
// 3: JavaScript.

// IF you want to Study these Subjects First, Find the Tutorials on My Github Profile.

// What Is JQuery:

// 1: JQuery Is a JavaScript Library.
// 2: JQuery Greatly Simplifies JavaScript Programming.
// 3: JQuery Is Easy to Learn. 

// JQuery is a lightweight, "write less, do more", JavaScript library.

// The purpose of JQuery is to make it much easier to use JavaScript on your website.

// JQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.

// JQuery also Simplifies a lot of the Complicated things From JavaScript, like AJAX calls and DOM Manipulation.

// The JQuery library Contains the Following Features:

// 1: HTML/DOM Manipulation.
// 2: CSS Manipulation.
// 3: HTML Event Methods.
// 4: Effects & Animations.
// 5: AJAX.
// 6: Utilities.

// Tip: In addition, JQuery has Plugins For Almost any Task Out there.

// Why JQuery:

// There are lots of Other JavaScript libraries out there, but JQuery Is Probably the most popular, & also the most Extendable.

// Many of the Biggest Companies on the Web Use JQuery, Such as:

// 1: Google.
// 2: Microsoft.
// 3: IBM.
// 4: Netflix.

// Adding JQuery to Your Web Pages:

// There are several ways to start using jQuery on your web site. You can:

// Download the JQuery library from jQuery.com.
// Include JQuery from a CDN, like Google.

// Downloading JQuery:

// There are Two Versions of JQuery Available For Downloading:

// Production version - This is for your live Website Because it has been minified and compressed
// Development version - This is for testing and Development (Uncompressed and readable code)

// Both Versions can be Downloaded From jQuery.com.

// The jQuery library is a Single JavaScript file, and you reference it with the HTML <script> tag (notice that the <script> tag should be inside the <head> section):

/* <head>
<script src="jquery-3.5.1.min.js"></script>
</head> */

// Tip: Place the Downloaded File in the same directory as the pages where you wish to use it.

// JQuery CDN:

// IF You Don't want to Download & Host JQuery Yourself, You can Include it From a CDN (Content Delivery Network).

// Google Is an Example Of Someone Who Host JQuery:

// Google CDN:

/* <head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head> */

$(document).ready(function () {// =>>> Document Is Run then Function Is Run...!

    // Your JQuery Code Is Here ...!

    // JQuery Sign:

    // console.log(jQuery) === $.
    // console.log($) === JQuery.

    // JQuery Syntex:

    // $("Statement").action() // =>>> JQuery Syntex Look Like This.

    // Example: 

    //  $("p").click() // ===> Click on All the P Elements.

    // $("p").click(function () {
    //     console.log("You Clicked On P: ", this)

        // $("p").hide() // ===> Hide P.

        // $(this).hide() // ===> Clicking on a paragraph will hide that paragrap.h  

        // $('#id').hide(); // ===> Hide Particular ID.

        // $('.class').hide(); // ===> Hide All Classes.

    // }) // Do this When We Click on P.

    // *) There are three Main Types Of Selectors In JQuery:

    // 1: Element Selector. 
    // 2: ID Selector. 
    // 3: Class Selector. 

    // *) Examples:

    // 1: Element Selector - This Is an Example Of Elements Selectors. Which Clicks On All P.
    // $("p").click(function(){
    //     console.log("You Click On P: ", this)
    // })
    // 2: ID Selector - This Is an Example Of ID Selector.
    // $("#PeraID").click(
    //     () => {
    //         console.log("Pera ID Is Render...")
    //     }
    // )
    // 3: Class Selector - This Is an Example Of Class Selector.
    // $(".PeraClass").click(
    //     () => {
    //         console.log("Pera Class Is Render...")
    //     }
    // )

    // Other Selectors:

    // $("*").click() // ===> Click On All The Elements.
    // $("p.PeraClass").click() // ===> Click On P Inside Odd Class Elements.
    // $("p:first").click() // ===> Click On First P Element.

    // *) Events In JQuery:

    // 1: Mouse Events:

    // 1: Click.
    // 2: Double Click.
    // 3: Mouse Enter.
    // 4: Mouse Leave.
    // 5: Mouse Hover.
    // 6: Mouse Up.
    // 7: Mouse Down.

    // 2: Keyboard Events:

    // 1: Keydown.
    // 2: Keypress.
    // 3: Media Key Status Map.
    // 4: Key Up.

    // 3: Form Events: 

    // 1: Focus.
    // 2: Submit.
    // 3: Change.
    // 4: Blur.

    // 4: Document | Window Events: 

    // 1: Load. 
    // 2: Resize.
    // 3: Scroll.
    // 4: UnLoad. 

    // 1: MouseEvents: Click, Double_Click, Mouse_Enter, Mouse_Leave, Mouse_Hover, Mouse_Up, Mouse_Down

    // *) Examples:

    // 1: Click.
    // $("p").click(() => {
    //     console.log("Single Click...")
    // })
    // 2: Double_Click.
    // $("p").dblclick(() => {
    //     console.log("Double Click...")
    // })
    // 3: Mouse_Enter.
    // $("p").mouseenter(function(){
    //     console.log("You Entered: ", this)
    // })
    // 4: Mouse_Leave.
    // $("p").mouseleave(function(){
    //     console.log("You Entered: ", this)
    // })
    // 5: Mouse_Hover.
    // $("p").hover(function(){
    //     console.log("You Entered: ", this)
    // },
    // function(){
    //     console.log("Related Work Mouse Up: ")
    // })
    // 6: Mouse_Up.
    // $("p").mouseup(function(){
    //     console.log("You Mouse Up: ", this)
    // })
    // 7: Mouse_Down.
    // $("p").mousedown(function(){
    //     console.log("You Mouse Down: ", this)
    // })

     // 1: Keyboard Events: Key Down, Key Up, KeyPress

    // *) Examples:

    // 1: Key Down.
    $("#inp").keydown(() => {
        $("#inp").css({"background-color":"black","color":"white"})
    })
    // 2: Key Up.
    $("#inp").keyup(() => {
        $("#inp").css({"background-color":"white","color":"black"})
    })
    // 3: Key Press.
    var i = 0;
    $("input").keypress(() => {
        $("span").text(i += 1);
    })

    // *) Do The Rest Yourself =>>> Events...!

    // *) Demoing The On Method:

    // $("p").on({
    //     click: function(){
    //         console.log("Thanks For Clicking...! ", this)
    //     },
    //     mouseenter: function(){
    //         console.log("Mouse Enter...!")
    //     }
    // })

    // *) Show & Hide

    // $("#wiki").hide(1000, function(){
    //     console.log("Hidden...!")
    // })

    // $("#wiki").show(1000, function(){
    //     console.log("Show...!")
    // })

    // *) Work Sample...!

    $("#tog").click(function () {

        // *) Other Toggle Methods

        // $("#wiki").toggle();

        // $("#wiki").fadeOut(1000);

        // $("#wiki").fadeIn(1000);

        // $("#wiki").fadeTo("Slow",0.33);

        $("#wiki").fadeToggle(1000);

    })

    // *) Sliding Methods_(Up, Down)

    // *) Slide Method - Speed & CallBack Parameters Are Optional...!

    // $("#wiki").slideUp(2000, () => { // ===> Two Parameters Speed & Callback...!
    //     console.log("Slide Is Top...!")
    // })

    // $("#wiki").slideDown(2000, () => { // ===> Two Parameters Speed & Callback...!
    //     console.log("Slide Is Bottom...!")
    // })

    // *) Work Samples...!

    $("#slide").click(function () {

        // *) Other Sliding Methods

        $("#wiki").slideToggle(1500)
    })

    // *) Animate Function In JQuery...!

    // $("#wiki").animate({
    //     opacity: 0.3,
    //     height: "950px",
    //     width: "350px",
    //     }, 4000)        

    // *) Example Work...!

    $("#animate").click(() => {

        $("#wiki").animate({ opacity: 0.33, width: "100px" }, 1000)

        $("#wiki").animate({ opacity: 0.95, width: "1165px" }, 1000)

    })

    // *) HTML DOM With JQuery...!

    // $("#wiki").mouseenter(() => {
    //     console.log($("#wiki").text())
    // })

    // *) Empty Val...! 

    // $("#wiki").mouseenter(() => {
    //     console.log($("#wiki").empty())
    // })

    // *) Remove Tag With Val...! 

    // $("#wiki").mouseenter(() => {
    //     console.log($("#wiki").remove())
    // })

    // *) Example Work...!

    $("#dom").click(() => {
        $("#wiki").text("Hey Dear, How are You...!")
    })

    // *) Input || TextArea Editing...!

    // console.log($("#ta").val())
    // console.log($("#inp").val())

    // *) Example Work...!

    $("#inptext").click(() => {
        alert($("#ta").val())
        alert($("#inp").val())
    })

    // *) Other Methods...!

    $("#chan").click(() => {
        $("#inp").val("Setting It To Jibran...!")
        $("#ta").val("Setting It To Jibran...!")
    })

    // *) Add & Remove Classes In DOM Element...!

    $("#add").click(() => {
        $("#wiki").addClass('wiki')
    })

    $("#remove").click(() => {
        $("#wiki").removeClass('wiki')
    })

    // *) Other Method With Example...!

    $("#togclas").click(() => {
        $("p").toggleClass("main")
    })

    // *) Css In JQuery With Example...!

    $("#css").click(() => {
        $("#example").css("color", "wheat")
    })

    // *) Check Color Property Value...!

    // console.log($("#example").css("color"))

    // *) Find Anchor Href Using_(Attr)...!

    $("a").click(() => {
        Github = $("a").attr("href")
        alert(Github)    
    })

    // Set href Value...!

    // $("a").click(() => {
    //     Github = $("a").attr("href","https://www.google.com")   
    // })

    // alert "https://github.com/jibranabduljabbar"
    
    // *) Find Image Src Using_(Attr)...!

    // $("#img").click(() => {
    //     img = $("img").attr("src")
    //     alert(img)    
    // })

    // Change Image Src Value...!

    $("#img").click(() => {
        img = $("img").attr("src", "./Media/2.jpg")
    })

    // *) DOM Traversal


    // *) The eq() method can be used to select a specific element from multiple selected elements.
    // *) For example, if the page contains multiple div elements and we want to select the third one:

    // console.log($("div").eq(0));

    // *) The index numbers start at 0, so the first element will have the index number 0.

    // *) Remove Elements:

    // *) We remove selected elements from the DOM using the remove() method.For Example:

    // $("p").eq(1).remove();

    // *) This removes Green, the second paragraph element. You can also use the remove() method on multiple selected elements, for example $("p").remove() removes all paragraphs.

    // *) Trigger Events...!

    // *) We can also trigger events programmatically using the trigger() method. For example, you can trigger a click event without the user actually clicking on an element:

    // $("#trigger").click(() => alert("Clicked On Div...!"))
    // $("#trigger").trigger("click")

    // *) Database Work In JQuery...!

    // *) Get Data In JQuery...!

    $("#get").click(() => {
        $.get("https://jsonplaceholder.cypress.io/todos/1", (data, status) => {
            console.log("Data ===>", data)
            console.log("Status ===>", status)
        })
    })

    // *) Post Data In JQuery...!

    $("#post").click(() => {
        $.post("/jquery/submitData",
        {
          name: "Donald Duck",
          city: "Duckburg"
        },
        function(data,status){
          alert("Data: " + data + "\nStatus: " + status);
        });
    })

    // *) Using JQuery Create a TODO AppliCation...!

    // *) To-Do List...!

    // *) Let's create a To-Do list project using the concepts we have learned. The To-Do list will be able to add new items to a list, as well as remove existing items.

    // *) First, we create the HTML...!

    // *) Second, we create the JQuery...!

    $("#addtodo").click(() => {
        var input = $("#inptodo").val()
        
        if(input !== ""){
            
           var list = $("<li></li>").text(input).addClass("list")
           var del = $("<br><br><button>X</button><br><br>").addClass("close")
           
           list.append(del)

           $("#orderlist").append(list)

           $("#inptodo").val("");
        $("li").click(() => {
            $(this).toggleClass('line-through');
        })

           $("#closeall").click(() => {
              $("li").remove()
           })

           $(".close").click(function() {
            $(this).parent().remove();
           })

    }
    })

    // *) Drop-Down Menu:

    // *) Let's create a simple drop-down menu that will open upon clicking on the menu item.

    $("#item").click(() => {
        $("#submenu").slideToggle(500);
    })
    
    
// *)                                      😍!...Complete JQuery In Lectured Video...!😍                                       (* \\

})