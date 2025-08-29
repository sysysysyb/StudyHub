import { readFileSync } from 'fs'

const file = process.argv[2]
const subject = readFileSync(file, 'utf8').split('\n')[0].trim()

if (/^(Merge|Revert)\b/i.test(subject)) process.exit(0)

const ok = /\s\(#\d+\)$/.test(subject)

if (!ok) {
  console.error('커밋 제목은 ` (#이슈번호)`로 끝나야 합니다.')
  console.error('예) Feature: 기능 추가 (#1)')
  process.exit(1)
}
