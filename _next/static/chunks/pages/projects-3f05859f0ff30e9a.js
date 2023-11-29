(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9182:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return a(4746)}])},8396:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var i=a(5893),n=a(9008),s=a.n(n),r=a(1163);function c(e){var t=(0,r.useRouter)(),a=e.title?e.title+" | WizardLM":"WizardLM",n=e.desc?e.desc:"WizardLM, Large Language Model.",c=e.image?e.image:"/social.png",o=e.alt?e.alt:"The text: WizardLM, Large Language Model.",l=e.slug?e.slug:t.route;return(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:a}),(0,i.jsx)("meta",{name:"title",content:a}),(0,i.jsx)("meta",{property:"og:title",content:a}),(0,i.jsx)("meta",{name:"twitter:title",content:a}),(0,i.jsx)("meta",{name:"description",content:n}),(0,i.jsx)("meta",{property:"og:description",content:n}),(0,i.jsx)("meta",{name:"twitter:description",content:n}),(0,i.jsx)("meta",{property:"og:image",content:"https://wizardlm.github.io"+c}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://wizardlm.github.io"+c}),(0,i.jsx)("meta",{name:"twitter:image:alt",content:o}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:url",content:"https://wizardlm.github.io"+l}),(0,i.jsx)("meta",{name:"twitter:url",content:"https://wizardlm.github.io"+l}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,i.jsx)("meta",{name:"theme-color",content:"#6767b5"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon.png"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.png",type:"image/png"})]})}},4746:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var i=a(5893),n=a(8396),s=a(1664),r=a.n(s),c=JSON.parse('[{"name":"Models","entries":[{"name":"WizardLM","architecture":"Base: Llama","size":"Size: 7B, 13B, 70B","desc":"An open-source chatbot to follow complex instructions.","link":"https://github.com/nlpxucan/WizardLM/tree/main"},{"name":"WizardCoder","architecture":"Base: Llama","size":"Size: 1B, 3B, 7B, 13B, 15B, 34B","desc":"A series of open-source chatbots for coding.","link":"https://wizardlm.github.io/WizardCoder/"},{"name":"WizardMath","architecture":"Base: Llama","size":"Size: 7B, 13B, 70B","desc":"A mathematical reasoning LLM.","link":"https://wizardlm.github.io/WizardMath/"}]},{"name":"Datasets","entries":[{"name":"Evol-Instruct 70K","architecture":"","size":"","desc":"This dataset contains 70K mixture evolved data of Alpaca.","link":"https://huggingface.co/datasets/WizardLM/WizardLM_evol_instruct_70k"},{"name":"Evol-Instruct 196K","architecture":"","size":"","desc":"This dataset contains 196K mixture evolved data of Alpaca and ShareGPT.","link":"https://huggingface.co/datasets/WizardLM/WizardLM_evol_instruct_V2_196k"}]},{"name":"Evaluation","entries":[{"name":"WizardEval","architecture":"","size":"","desc":"This test set contains 218 diverse and difficult real-world human instructions with 29 skills.","link":"https://github.com/nlpxucan/WizardLM/blob/main/WizardLM/data/WizardLM_testset.jsonl"}]}]');function o(){return(0,i.jsxs)("div",{className:"w-full flex justify-center py-5 pt-16 md:pt-5",children:[(0,i.jsx)(n.Z,{title:"Projects",desc:"WizardLM: Empowering Large Language Models to Follow Complex Instructions."}),(0,i.jsxs)("div",{className:"container px-5",children:[(0,i.jsx)("h1",{className:"text-7xl md:text-8xl font-bold",children:"PROJECTS"}),(0,i.jsx)("div",{className:"text-2xl pb-4",children:"WizardLM: Empowering Large Language Models to Follow Complex Instructions."}),(0,i.jsx)("hr",{className:"mb-5 mt-2 md:hidden"}),c.map((function(e,t){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"pb-4 "+(0===t?"pt-0":"pt-5"),children:e.name.toUpperCase()}),(0,i.jsx)("div",{className:"grid gap-5 grid-cols-2",children:e.entries.map((function(e,t){return"/"===e.link.charAt(0)?(0,i.jsx)("a",{href:e.link,className:"no-underline "+(void 0===e.desc?"col-span-1":"col-span-2"),children:(0,i.jsx)(r(),{href:e.link,children:(0,i.jsx)(l,{item:e})},t)},e.link):(0,i.jsx)("a",{href:e.link,rel:"noopener noreferrer",target:"_blank",className:"no-underline "+(void 0===e.desc?"col-span-1":"col-span-2"),children:(0,i.jsx)(l,{item:e})},t)}))})]},t)}))]})]})}function l(e){var t=e.item;return(0,i.jsxs)("div",{className:" bg-sky text-paper border border-paper hover:bg-paper hover:text-sky cursor-pointer transition-colors p-5 shadow-lg shadow-neutral-800/20 flex flex-col sm:flex-row ",children:[(0,i.jsxs)("div",{className:void 0!==t.desc&&"basis-1/4",children:[(0,i.jsx)("p",{className:"text-2xl",children:t.name}),(0,i.jsx)("p",{className:"text-sm",children:t.architecture}),(0,i.jsx)("p",{className:"text-sm",children:t.size})]}),(0,i.jsx)("hr",{className:"mt-4 mb-4 sm:hidden "+(void 0===t.desc&&"hidden")}),(0,i.jsx)("div",{className:"text-lg basis-3/4 "+(void 0===t.desc&&"hidden"),children:t.desc})]})}},9008:function(e,t,a){e.exports=a(3121)},1163:function(e,t,a){e.exports=a(880)}},function(e){e.O(0,[774,888,179],(function(){return t=9182,e(e.s=t);var t}));var t=e.O();_N_E=t}]);