"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region?: string
          portalId: string
          formId: string
          target: string
          css?: string
          cssClass?: string
          submitButtonClass?: string
          formInstanceId?: string
          onFormSubmit?: (form: unknown) => void
          onFormReady?: (form: unknown) => void
        }) => void
      }
    }
  }
}

interface HubSpotFormProps {
  /** HubSpot form ID (from form embed code in HubSpot) */
  formId: string
  /** Optional portal ID - defaults to NEXT_PUBLIC_HUBSPOT_PORTAL_ID */
  portalId?: string
  /** Optional region, e.g. "na1" */
  region?: string
  /** Optional CSS class for the wrapper */
  className?: string
  /** Optional inline styles for the form container */
  style?: React.CSSProperties
}

export function HubSpotForm({
  formId,
  portalId: portalIdProp,
  region = "na1",
  className = "",
  style,
}: HubSpotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const portalId = portalIdProp || process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID

  useEffect(() => {
    if (!portalId || !formId || !containerRef.current) return

    const loadScript = () => {
      const existing = document.querySelector('script[src="https://js.hsforms.net/forms/v2.js"]')
      if (existing) {
        renderForm()
        return
      }

      const script = document.createElement("script")
      script.src = "https://js.hsforms.net/forms/v2.js"
      script.async = true
      script.onload = () => renderForm()
      document.body.appendChild(script)
    }

    const renderForm = () => {
      if (!window.hbspt?.forms?.create || !containerRef.current) return
      containerRef.current.innerHTML = ""
      window.hbspt.forms.create({
        region,
        portalId,
        formId,
        target: `#hubspot-form-${formId}`,
        cssClass: "hubspot-form-styles",
      })
    }

    loadScript()
  }, [portalId, formId, region])

  if (!portalId || !formId) {
    return (
      <div className={`rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-800 ${className}`} style={style}>
        <p className="text-sm font-medium">HubSpot form not configured.</p>
        <p className="mt-1 text-xs">
          Set NEXT_PUBLIC_HUBSPOT_PORTAL_ID and the form ID (e.g. HUBSPOT_CONTACT_FORM_ID) in your environment.
        </p>
      </div>
    )
  }

  return (
    <div
      id={`hubspot-form-${formId}`}
      ref={containerRef}
      className={className}
      style={style}
    />
  )
}
