import {isDefined} from '~common/utils'
import {useCallback, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography} from '@mui/material'
import {useDocument} from '~main/hooks/useDocument'
import {Editor, Header} from '~main/components'
import {languageOptions} from '~main/components/Editor/languages'

export default function Document() {
  const {id} = useParams<{ id: string }>()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [language, setLanguage] = useState(-1)
  const [tabSize, setTabSize] = useState(2)
  const {document, update} = useDocument({id})

  useEffect(() => {
    if (document) {
      isDefined(document.title) && setTitle(document.title)
      isDefined(document.language) && setLanguage(document.language)
      isDefined(document.tabSize) && setTabSize(document.tabSize)
      isDefined(document.content) && setContent(document.content)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document])

  const onContentChange = useCallback((value: string) => {
    update(document => document.content = value)
  }, [update])

  const onLanguageChange = ({target}: SelectChangeEvent) => {
    const value = parseInt(target.value)
    setLanguage(value)

    update(document => document.language = value)
  }

  const onTabSizeChange = ({target}: SelectChangeEvent) => {
    const value = parseInt(target.value)
    setTabSize(value)

    update(document => document.tabSize = value)
  }

  return (
    <Box display="flex" flexDirection="column" sx={{
      height: '100vh',
    }}>
      <Header>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box>
            <Typography variant="h5">{title}</Typography>
          </Box>
          <Box flexShrink={1}>
            <FormControl variant="standard" sx={{marginLeft: 2}}>
              <Select
                onChange={onTabSizeChange}
                value={tabSize.toString()}
              >
                <MenuItem key={1} value="1">1</MenuItem>
                <MenuItem key={2} value="2">2</MenuItem>
                <MenuItem key={4} value="4">4</MenuItem>
                <MenuItem key={6} value="6">6</MenuItem>
                <MenuItem key={8} value="8">8</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{marginLeft: 2}}>
              <Select
                value={language.toString()}
                onChange={onLanguageChange}
              >
                <MenuItem key={-1} value="-1">Language</MenuItem>
                {languageOptions.map((value, index) => (
                  <MenuItem key={index} value={index.toString()}>{value}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Header>
      <Box sx={{
        flexGrow: 1,
        position: 'relative',
      }}>
        <Editor
          language={language}
          onChange={onContentChange}
          tabSize={tabSize}
          value={content}
        />
      </Box>
    </Box>
  )
}
