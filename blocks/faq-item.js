import { RichText} from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("blocktheme/faq-item", {
    title: "FAQ item",
    attributes: {
        title: {type: "string", default:"lorem ipsum"},
        text: {type: "string", default:"Lorem ipsum dolor sit amet. Id quae voluptas cum facere galisum ut animi optio est soluta delectus et voluptatem repellat ab facere enim non veniam accusamus. Id voluptate deleniti aut esse omnis qui iure asperiores et iste quisquam qui minima rerum nam asperiores corporis. Et tenetur iste aut asperiores recusandae sit culpa expedita. Qui voluptatem voluptas sed quam animi ut cupiditate nulla et pariatur quam ut iure odio!"},
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {
    return (
        <>
            <div className="kutup-faq-wrapper">
                <div className="kutup-faq-top-part _1">
                    <div className="kutup-faq-title-content">
                        <RichText
                            tagName="div" className="kutup-faq-title"
                            value={props.attributes.title} onChange={(x)=>props.setAttributes({ title: x })}
                        />
                    </div>
                    <div className="kutup-faq-icon">
                        <div className="kutup-faq-plus-icon">
                            <div className="kutup-stripe-1"></div>
                            <div className="kutup-stripe-2"></div>
                        </div>
                    </div>
                </div>
                <div className="kutup-faq-item">
                    <div className="kutup-faq-content">
                        <RichText
                            tagName="p" className="kutup-paragraph"
                            value={props.attributes.text} onChange={(x)=>props.setAttributes({ text: x })}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}


function SaveComponent(props) {
    return <div className="kutup-faq-wrapper">
        <div className="kutup-faq-top-part _1">
            <div className="kutup-faq-title-content">
                <div className="kutup-faq-title">{props.attributes.title}</div>
            </div>
            <div className="kutup-faq-icon">
                <div className="kutup-faq-plus-icon">
                    <div className="kutup-stripe-1"></div>
                    <div className="kutup-stripe-2"></div>
                </div>
            </div>
        </div>
        <div className="kutup-faq-item">
            <div className="kutup-faq-content">
                <p className="kutup-paragraph">{props.attributes.text}</p>
            </div>
        </div>
    </div>
}
