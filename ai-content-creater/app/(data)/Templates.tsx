export default [
    {
        name: 'Blog Title',
        desc: 'An ai tool that generates Blog title depends on you blog info',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'give me 5bblog idea in bullet wise only based on given niche and outline topic and give me result in rich text editor formate  ',
        slug: 'title',
        form: [
            {
                label: 'enter your blog niche',
                field: 'input',
                name: 'niche',
                required:true,
            },
            {
                label: 'enter blog outline',
                field: 'textarea',
                name:'outline'
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An ai tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles and content in choosen language',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
        aiPrompt: 'give me 5bblog idea in bullet wise only based on given niche and outline topic and give me result in rich text editor formate  ',
        slug: 'content',
        form: [
            {
                label: 'enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Idea',
        desc: 'An ai tool that generates topic ideas on your interest',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/16435/16435872.png',
        aiPrompt: 'give me 5bblog idea in bullet wise only based on given niche and outline topic and give me result in rich text editor formate  ',
        slug: 'titleIdea',
        form: [
            {
                label: 'enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An ai tool that serves on your personal youtube video title seo ',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/470/470699.png',
        aiPrompt: 'give me 5bblog idea in bullet wise only based on given niche and outline topic and give me result in rich text editor formate  ',
        slug: 'SEO',
        form: [
            {
                label: 'enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Description',
        desc: 'An ai tool that serves as your personal blog post title writer growing catchy and desciption ',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'give me 5bblog idea in bullet wise only based on given niche and outline topic and give me result in rich text editor formate  ',
        slug: 'youtubeDescription',
        form: [
            {
                label: 'enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An ai tool that serves you youtube tags as per your youtube title',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/10884/10884882.png',
        aiPrompt: 'give me 5bblog idea in bullet wise only based on given niche and outline topic and give me result in rich text editor formate  ',
        slug: 'youtubeTags',
        form: [
            {
                label: 'enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Rewrite Articles(Plagiarism free)',
        desc: 'Use this AI tool to rewrite existing Article or blog post ',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2696/2696555.png',
        aiPrompt: 'give me 5bblog idea in bullet wise only based on given niche and outline topic and give me result in rich text editor formate  ',
        slug: 'rewArticle',
        form: [
            {
                label: 'enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Text improver',
        desc: 'This Handlly tools refines Your writing , eleminiting errors and redundancies for clear meaning  ',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/1162/1162943.png',
        aiPrompt: 'give me 5bblog idea in bullet wise only based on given niche and outline topic and give me result in rich text editor formate  ',
        slug: 'textImprover',
        form: [
            {
                label: 'enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Add Emojis to text ',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral text and emojis  ',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'give me 5bblog idea in bullet wise only based on given niche and outline topic and give me result in rich text editor formate  ',
        slug: 'addEmojis',
        form: [
            {
                label: 'enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Instagram post generater',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral content   ',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        aiPrompt: 'give me 5bblog idea in bullet wise only based on given niche and outline topic and give me result in rich text editor formate  ',
        slug: 'instagram',
        form: [
            {
                label: 'enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    }
]