<template>
  <div class="d-flex flex-col p-10 main-block m-20">
    <h1>2. Write the information you want to send</h1>
    <div>
      <input v-model="title" placeholder="Title" class="minimal-input m-40" />
    </div>
    <div class="main-container">
      <div
        class="editor-container editor-container_inline-editor editor-container_include-block-toolbar"
        ref="editorContainerElement"
      >
        <div class="editor-container__editor">
          <div ref="editorElement">
            <ckeditor
              v-if="isLayoutReady"
              v-model="config.initialData"
              :editor="editor"
              :config="config"
            />
          </div>
        </div>
      </div>
    </div>
    <button @click="insertMail" class="clean-button ml-auto mt-20">✉️ Send Message</button>
    <SuccessPopup v-if="isSent" message="The mail has been uploaded and sent on the app" />
    <div v-if="isEmpty" class="warning-bubble mt-30">
      <strong style="font-weight: 900">⚠️ Important Notice :</strong>
      To ensure that your explanations captivate and engage students, please use the editor to
      construct your content as clearly and effectively as possible. Clear, well-structured
      explanations are key to maintaining student interest and facilitating a deeper understanding
      of the material.
    </div>
  </div>
</template>

<script setup>
import 'ckeditor5/ckeditor5.css'
import { supabase } from '@/backend/supabase'
import { useUserStore } from '@/stores/userStore'
import SuccessPopup from '@/components/utils/SuccessPopup.vue'

import { useMailDestinationStore } from '@/stores/mailStore'
import { ref, onMounted, watch } from 'vue'
import {
  InlineEditor,
  AccessibilityHelp,
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  BlockQuote,
  BlockToolbar,
  Bold,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  HorizontalLine,
  ImageBlock,
  ImageCaption,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  SelectAll,
  SimpleUploadAdapter,
  SpecialCharacters,
  Table,
  TableColumnResize,
  TableToolbar,
  TextTransformation,
  Underline,
  Undo
} from 'ckeditor5'

const userStore = useUserStore()
const mailStore = useMailDestinationStore()
const isLayoutReady = ref(false)
const config = ref({}) // Initialisation avec un objet vide
const editor = InlineEditor
const isEmpty = ref(true)
const title = ref('')
const isSent = ref(false)
userStore.loadUserFromSession()
const idsDestination = ref(mailStore.getSelectedUids)

async function insertMail() {
  const { data, error } = await supabase
    .from('modalities')
    .insert([
      {
        mod_name: title.value,
        mod_description: config.value.initialData,
        mod_university_id: userStore.uniId,
        mod_stu_destination: idsDestination.value
      }
    ])
    .select()

  if (error) {
    console.error(error)
  } else {
    console.log('sent')
    config.value.initialData = ''
    title.value = ''
    mailStore.clearSelectedStudents()
    isSent.value = true
    setTimeout(() => {
      isSent.value = false
    }, 3000)
  }
}

watch(
  () => config.value.initialData,
  (newValue) => {
    console.log(config.value.initialData)
    isEmpty.value = newValue.trim() === ''
  }
)

onMounted(() => {
  config.value = {
    toolbar: {
      items: [
        'undo',
        'redo',
        '|',
        'selectAll',
        '|',
        'heading',
        '|',
        'fontSize',
        'fontFamily',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'bold',
        'italic',
        'underline',
        '|',
        'specialCharacters',
        'horizontalLine',
        'link',
        'insertImage',
        'mediaEmbed',
        'insertTable',
        'blockQuote',
        '|',
        'alignment',
        '|',
        'bulletedList',
        'numberedList',
        'outdent',
        'indent',
        '|',
        'accessibilityHelp'
      ],
      shouldNotGroupWhenFull: false
    },
    plugins: [
      AccessibilityHelp,
      Alignment,
      Autoformat,
      AutoImage,
      AutoLink,
      Autosave,
      BlockQuote,
      BlockToolbar,
      Bold,
      Essentials,
      FontBackgroundColor,
      FontColor,
      FontFamily,
      FontSize,
      Heading,
      HorizontalLine,
      ImageBlock,
      ImageCaption,
      ImageInsert,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      ImageUpload,
      Indent,
      IndentBlock,
      Italic,
      Link,
      LinkImage,
      List,
      MediaEmbed,
      Paragraph,
      PasteFromOffice,
      SelectAll,
      SimpleUploadAdapter,
      SpecialCharacters,
      Table,
      TableColumnResize,
      TableToolbar,
      TextTransformation,
      Underline,
      Undo
    ],
    blockToolbar: [
      'fontSize',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'bold',
      'italic',
      '|',
      'link',
      'insertImage',
      'insertTable',
      '|',
      'bulletedList',
      'numberedList',
      'outdent',
      'indent'
    ],
    fontFamily: {
      supportAllValues: true
    },
    fontSize: {
      options: [10, 12, 14, 'default', 18, 20, 22],
      supportAllValues: true
    },
    heading: {
      options: [
        {
          model: 'paragraph',
          title: 'Paragraph',
          class: 'ck-heading_paragraph'
        },
        {
          model: 'heading1',
          view: 'h1',
          title: 'Heading 1',
          class: 'ck-heading_heading1'
        },
        {
          model: 'heading2',
          view: 'h2',
          title: 'Heading 2',
          class: 'ck-heading_heading2'
        },
        {
          model: 'heading3',
          view: 'h3',
          title: 'Heading 3',
          class: 'ck-heading_heading3'
        },
        {
          model: 'heading4',
          view: 'h4',
          title: 'Heading 4',
          class: 'ck-heading_heading4'
        },
        {
          model: 'heading5',
          view: 'h5',
          title: 'Heading 5',
          class: 'ck-heading_heading5'
        },
        {
          model: 'heading6',
          view: 'h6',
          title: 'Heading 6',
          class: 'ck-heading_heading6'
        }
      ]
    },
    image: {
      toolbar: [
        'toggleImageCaption',
        'imageTextAlternative',
        '|',
        'imageStyle:alignBlockLeft',
        'imageStyle:block',
        'imageStyle:alignBlockRight',
        '|',
        'resizeImage'
      ],
      styles: {
        options: ['alignBlockLeft', 'block', 'alignBlockRight']
      }
    },
    initialData: '',
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: 'https://',
      decorators: {
        toggleDownloadable: {
          mode: 'manual',
          label: 'Downloadable',
          attributes: {
            download: 'file'
          }
        }
      }
    },
    placeholder: 'Type or paste your content here!',
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
    }
  }

  isLayoutReady.value = true
})
</script>

<style scoped></style>
