import ErrorWrapper from './(layout)/ErrorWrapper'

export default function NotFound() {
  return <ErrorWrapper code={404} message={'Not found'} />
}
