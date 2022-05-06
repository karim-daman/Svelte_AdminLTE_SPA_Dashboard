// @ts-nocheck
import Site from "$lib/pages/Site.svelte";
import NotFound from "$lib/pages/NotFound.svelte";
import Dashboard from "$lib/pages/Dashboard.svelte";
import Widgets from "$lib/pages/Widgets.svelte";
import Calender from "$lib/pages/Calender.svelte";
import Gallary from "$lib/pages/Gallary.svelte";
import Kanban from "$lib/pages/Kanban.svelte";

//------------------------------------------------------------------------------examples
import Notfound from "$lib/pages/examples/404.svelte";
import ServerError from "$lib/pages/examples/500.svelte";
import Blank from "$lib/pages/examples/blank.svelte";
import ContactUs from "$lib/pages/examples/contact-us.svelte";
import Contacts from "$lib/pages/examples/contacts.svelte";
import ECommerce from "$lib/pages/examples/e-commerce.svelte";
import Faq from "$lib/pages/examples/faq.svelte";
import ForgotPassword_v2 from "$lib/pages/examples/forgot-password-v2.svelte";
import ForgotPassword from "$lib/pages/examples/forgot-password.svelte";
import InvoicePrinting from "$lib/pages/examples/invoice-print.svelte";
import Invoice from "$lib/pages/examples/invoice.svelte";
import LanguageMenu from "$lib/pages/examples/language-menu.svelte";
import LegacyUserMenu from "$lib/pages/examples/legacy-user-menu.svelte";
import LockScreen from "$lib/pages/examples/lockscreen.svelte";
import Login_v2 from "$lib/pages/examples/login-v2.svelte";
import Login from "$lib/pages/examples/login.svelte";
import Pace from "$lib/pages/examples/pace.svelte";
import Profile from "$lib/pages/examples/profile.svelte";
import ProjectAdd from "$lib/pages/examples/project-add.svelte";
import ProjectDetail from "$lib/pages/examples/project-detail.svelte";
import ProjectEdit from "$lib/pages/examples/project-edit.svelte";
import Projects from "$lib/pages/examples/projects.svelte";
import RecoverPassword_v2 from "$lib/pages/examples/recover-password-v2.svelte";
import RecoverPassword from "$lib/pages/examples/recover-password.svelte";
import Register_v2 from "$lib/pages/examples/register-v2.svelte";
import Register from "$lib/pages/examples/register.svelte";
//------------------------------------------------------------------------------examples

//------------------------------------------------------------------------------forms
import Advanced from "$lib/pages/forms/advanced.svelte";
import Editors from "$lib/pages/forms/editors.svelte";
import GeneralForm from "$lib/pages/forms/general.svelte";
import Validation from "$lib/pages/forms/validation.svelte";
//------------------------------------------------------------------------------forms

//------------------------------------------------------------------------------mailbox
import Compose from "$lib/pages/mailbox/compose.svelte";
import MailBox from "$lib/pages/mailbox/mailbox.svelte";
import ReadMail from "$lib/pages/mailbox/read-mail.svelte";
//------------------------------------------------------------------------------mailbox

//------------------------------------------------------------------------------search
import EnhancedResults from "$lib/pages/search/enhanced-results.svelte";
import Enhanced from "$lib/pages/search/enhanced.svelte";
import SimpleResults from "$lib/pages/search/simple-results.svelte";
import Simple from "$lib/pages/search/simple.svelte";
//------------------------------------------------------------------------------search


//------------------------------------------------------------------------------tables
import Data from "$lib/pages/tables/data.svelte";
import JsGrid from "$lib/pages/tables/jsgrid.svelte";
import SimpleTable from "$lib/pages/tables/simple.svelte";
//------------------------------------------------------------------------------tables

//------------------------------------------------------------------------------Charts
import Charts from "$lib/pages/charts/Chartjs.svelte";
import Flot from "$lib/pages/charts/Flot.svelte";
import Inline from "$lib/pages/charts/Inline.svelte";
import Uplot from "$lib/pages/charts/Uplot.svelte";
//------------------------------------------------------------------------------Charts

//------------------------------------------------------------------------------ui_elements
import Buttons from "$lib/pages/ui_elements/Buttons.svelte"
import General from "$lib/pages/ui_elements/General.svelte"
import Icons from "$lib/pages/ui_elements/Icons.svelte"
import Modals from "$lib/pages/ui_elements/Modals.svelte"
import Navbar from "$lib/pages/ui_elements/Navbar.svelte"
import Ribbons from "$lib/pages/ui_elements/Ribbons.svelte"
import Slider from "$lib/pages/ui_elements/Slider.svelte"
import Timeline from "$lib/pages/ui_elements/Timeline.svelte"
//------------------------------------------------------------------------------ui_elements


//------------------------------------------------------------------------------layoutoptions
import Boxed from "$lib/pages/layoutoptions/boxed.svelte"
import Collapsed_sidebar from "$lib/pages/layoutoptions/collapsed-sidebar.svelte" 
import Fixed_footer from "$lib/pages/layoutoptions/fixed-footer.svelte"
import Fixed_sidebar_custom from "$lib/pages/layoutoptions/fixed-sidebar-custom.svelte"
import Fixed_sidebar from "$lib/pages/layoutoptions/fixed-sidebar.svelte"
import Fixed_topnav from "$lib/pages/layoutoptions/fixed-topnav.svelte"
import Top_nav_sidebar from "$lib/pages/layoutoptions/top-nav-sidebar.svelte"
import Top_nav from "$lib/pages/layoutoptions/top-nav.svelte"
//------------------------------------------------------------------------------layoutoptions


// import NotFound from './components/NotFound.svelte';
// import Dashboard from "$lib/components/Dashboard.svelte"

export default {
    '/': Dashboard,
    // '/index2': Dashboard2,
    // '/index3': Dashboard3,

    "/Site": Site,
    "/Chart" : Charts,
    "/Flot" : Flot,
    "/Inline" : Inline,
    "/Uplot" : Uplot,
    "/Widgets" : Widgets,
    "/Calender" : Calender,
    "/Gallary" : Gallary,
    "/Kanban" : Kanban,

    "/Buttons" : Buttons, 
    "/General" : General, 
    "/Icons" : Icons, 
    "/Modals" : Modals, 
    "/Navbar" : Navbar, 
    "/Ribbons" : Ribbons, 
    "/Slider" : Slider, 
    "/Timeline" : Timeline, 

     "/Boxed" : Boxed ,
     "/Collapsed_sidebar" : Collapsed_sidebar,
     "/Fixed_footer" : Fixed_footer ,
     "/Fixed_sidebar_custom" : Fixed_sidebar_custom ,
     "/Fixed_sidebar" : Fixed_sidebar ,
     "/Fixed_topnav" : Fixed_topnav ,
     "/Top_nav_sidebar" : Top_nav_sidebar ,
     "/Top_nav" : Top_nav ,

     "/Notfound" :Notfound,
     "/ServerError" :ServerError,
     "/Blank" :Blank,
     "/ContactUs" :ContactUs,
     "/Contacts" :Contacts,
     "/ECommerce" :ECommerce,
     "/Faq" :Faq,
     "/ForgotPassword_v2" :ForgotPassword_v2,
     "/ForgotPassword" :ForgotPassword,
     "/InvoicePrinting" :InvoicePrinting,
     "/Invoice" :Invoice,
     "/LanguageMenu" :LanguageMenu,
     "/LegacyUserMenu" :LegacyUserMenu,
     "/LockScreen" :LockScreen,
     "/Login_v2" :Login_v2,
     "/Login" :Login,
     "/Pace" :Pace,
     "/Profile" :Profile,
     "/ProjectAdd" :ProjectAdd,
     "/ProjectDetail" :ProjectDetail,
     "/ProjectEdit" :ProjectEdit,
     "/Projects" :Projects,
     "/RecoverPassword_v2" :RecoverPassword_v2,
     "/RecoverPassword" :RecoverPassword,
     "/Register_v2" :Register_v2,
     "/Register" :Register,

    "/Advanced" :  Advanced ,                                  
    "/Editors" :  Editors ,                                  
    "/GeneralForm" :  GeneralForm ,                                  
    "/Validation" :  Validation ,                                  

    "/Compose" :  Compose ,                                  
    "/MailBox" :  MailBox ,                                  
    "/ReadMail" :  ReadMail ,                                  

    "/EnhancedResults" :  EnhancedResults ,                                  
    "/Enhanced" :  Enhanced ,                                  
    "/SimpleResults" :  SimpleResults ,                                  
    "/Simple" :  Simple ,                                  

    "/Data" :  Data ,                                  
    "/JsGrid" :  JsGrid ,                                  
    "/SimpleTable" :  SimpleTable ,                                  


    

    // The catch-all route must always be last
    '*': NotFound
};
